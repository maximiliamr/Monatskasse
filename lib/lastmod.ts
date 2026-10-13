import { execFileSync } from "node:child_process";

function git(args: string[]): string {
  return execFileSync("git", args, { cwd: process.cwd(), encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
}

/**
 * Wann zuletzt ein Commit eine dieser Dateien geändert hat – für <lastmod> in der Sitemap.
 * Ohne Git oder mit gekürzter Historie (Cloudflare holt nur den letzten Commit) bleibt das
 * Datum weg: Dann hätte jede Seite das Datum des letzten Commits, und Google nutzt
 * <lastmod> nur, solange es stimmt.
 */
export function lastChange(paths: string[]): Date | undefined {
  try {
    if (git(["rev-parse", "--is-shallow-repository"]) !== "false") return undefined;
    const out = git(["log", "-1", "--format=%cI", "--", ...paths]);
    return out ? new Date(out) : undefined;
  } catch {
    return undefined;
  }
}
