/* ============================================================================
   GITHUB — real numbers, or none at all.

   Set GITHUB_TOKEN to switch the hero stats and the activity graph over to
   live data. Without it every function here returns null and the UI falls
   back to the static figures in `site.ts` (the graph hides itself entirely —
   a fabricated activity grid is worse than no grid).

     .env.local       GITHUB_TOKEN=github_pat_...
     Vercel           Settings → Environment Variables → GITHUB_TOKEN

   A classic token needs the `read:user` scope; a fine-grained token needs no
   extra permissions beyond public read. Never commit it — `.env*` is ignored.
   ============================================================================ */

export type ContributionDay = {
    /** ISO date, e.g. "2026-07-26". */
    date: string;
    count: number;
    /** 0-4, matching GitHub's own bucketing. */
    level: number;
};

export type GitHubStats = {
    repos: number;
    stars: number;
    contributions: number;
    /** Oldest → newest, last 3 months. */
    days: ContributionDay[];
};

const WINDOW_DAYS = 90;

const QUERY = /* GraphQL */ `
  query ($login: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $login) {
      repositories(
        privacy: PUBLIC
        ownerAffiliations: OWNER
        isFork: false
        first: 100
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        totalCount
        nodes {
          stargazerCount
        }
      }
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              contributionLevel
            }
          }
        }
      }
    }
  }
`;

const LEVELS: Record<string, number> = {
    NONE: 0,
    FIRST_QUARTILE: 1,
    SECOND_QUARTILE: 2,
    THIRD_QUARTILE: 3,
    FOURTH_QUARTILE: 4,
};

type RawDay = {
    date: string;
    contributionCount: number;
    contributionLevel: string;
};

/**
 * Fetched once per build and revalidated daily. Returns null on a missing
 * token, a network failure, a rate limit, or a malformed payload — callers
 * are expected to have a static fallback, so a broken GitHub never breaks
 * the page.
 */
export async function getGitHubStats(login: string): Promise<GitHubStats | null> {
    const token = process.env.GITHUB_TOKEN;
    if (!token) return null;

    const to = new Date();
    const from = new Date(to.getTime() - WINDOW_DAYS * 86_400_000);

    try {
        const res = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                query: QUERY,
                variables: { login, from: from.toISOString(), to: to.toISOString() },
            }),
            next: { revalidate: 86_400 },
        });

        if (!res.ok) return null;

        const json = await res.json();
        const user = json?.data?.user;
        const calendar = user?.contributionsCollection?.contributionCalendar;
        if (!user || !calendar) return null;

        const days: ContributionDay[] = (calendar.weeks ?? []).flatMap(
            (w: { contributionDays: RawDay[] }) =>
                w.contributionDays.map((d) => ({
                    date: d.date,
                    count: d.contributionCount,
                    level: LEVELS[d.contributionLevel] ?? 0,
                }))
        );
        if (!days.length) return null;

        const stars: number = (user.repositories?.nodes ?? []).reduce(
            (sum: number, r: { stargazerCount: number }) => sum + r.stargazerCount,
            0
        );

        return {
            repos: user.repositories?.totalCount ?? 0,
            stars,
            contributions: calendar.totalContributions ?? 0,
            days,
        };
    } catch {
        return null;
    }
}
