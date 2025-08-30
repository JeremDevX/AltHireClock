import { neon } from "@neondatabase/serverless";
import AnalyticsWidget from "./AnalyticsWidget";
import { unstable_noStore } from "next/cache";

export const dynamic = "force-dynamic";

async function getData() {
  unstable_noStore();
  const sql = neon(process.env.DATABASE_URL || "");

  const totalViews = await sql`SELECT total_views FROM stats WHERE id = 1`;
  const osNumbers =
    await sql`SELECT os, COUNT(*)::int AS total FROM visitors GROUP BY os`;
  const browserNumbers =
    await sql`SELECT browser, COUNT(*)::int AS total FROM visitors GROUP BY browser`;
  const uniqueVisitor = await sql`SELECT COUNT(*)::int AS total FROM visitors;`;

  return {
    views: totalViews[0]?.total_views ?? 0,
    os: osNumbers as { os: string; total: number }[],
    browser: browserNumbers as { browser: string; total: number }[],
    uniqueVisitor: uniqueVisitor[0]?.total ?? 0,
  };
}
export default async function AnalyticsServer() {
  const { views, os, browser, uniqueVisitor } = await getData();
  return (
    <>
      <AnalyticsWidget
        views={views}
        os={os}
        browser={browser}
        uniqueVisitor={uniqueVisitor}
      />
    </>
  );
}
