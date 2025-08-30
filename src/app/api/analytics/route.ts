import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function POST(req: Request) {
  try {
    const { visitor_id, browser, os } = await req.json();

    if (!visitor_id) {
      return NextResponse.json(
        { error: "Missing visitor_id" },
        { status: 400 }
      );
    }

    // Insert visitor if new
    await sql`
      INSERT INTO visitors (visitor_id, os, browser)
      VALUES (${visitor_id}, ${os}, ${browser})
      ON CONFLICT (visitor_id) DO NOTHING
    `;

    // Increment total views
    await sql`
      UPDATE stats
      SET total_views = total_views + 1
      WHERE id = 1
    `;

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    console.error("Track error:", err);
    return NextResponse.json(
      { error: "Failed to track visitor" },
      { status: 500 }
    );
  }
}
