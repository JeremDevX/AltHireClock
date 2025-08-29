import { createChallenge } from "altcha-lib";
import { NextResponse } from "next/server";

export async function GET() {
  const challenge = await createChallenge({
    hmacKey: process.env.ALTCHA_HMAC_SECRET!,
    expires: new Date(Date.now() + 2 * 60_000),
  });

  return NextResponse.json(challenge);
}
