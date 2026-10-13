import { execFileSync } from "node:child_process";

/**
 * Wann zuletzt ein Commit eine dieser Dateien geändert hat – für <lastmod> in der Sitemap.
 * Ohne Git (oder ohne Treffer) bleibt das Datum weg; Google nutzt es nur, wenn es stimmt.
 */
export function lastChange(paths: string[]): Date | undefined {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", ...paths], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out ? new Date(out) : undefined;
  } catch {
    return undefined;
  }
}
