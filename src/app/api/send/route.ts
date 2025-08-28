import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const contentType = req.headers.get("content-type") || "";

    let name: string | undefined;
    let email: string | undefined;
    let message: string | undefined;

    if (contentType.includes("application/json")) {
      const body = await req.json();
      name = (body?.name ?? "").toString();
      email = (body?.email ?? "").toString();
      message = (body?.message ?? "").toString();
    } else {
      const form = await req.formData();
      name = (form.get("name") ?? "").toString();
      email = (form.get("email") ?? "").toString();
      message = (form.get("message") ?? "").toString();
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Champs manquants: name, email et message sont requis." },
        { status: 400 }
      );
    }

    const emailOk = /.+@.+\..+/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { error: "Adresse email invalide." },
        { status: 422 }
      );
    }

    const subject = `Nouveau message de contact — ${name}`;

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;line-height:1.6">
        <h2 style="margin:0 0 12px 0">Nouveau message de contact</h2>
        <p style="margin:0 0 8px 0"><strong>Nom:</strong> ${escapeHtml(
          name
        )}</p>
        <p style="margin:0 0 8px 0"><strong>Email:</strong> ${escapeHtml(
          email
        )}</p>
        <p style="margin:12px 0 0 0;white-space:pre-wrap">${escapeHtml(
          message
        )}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "no-reply@mail.jeremdevx.com",
      to: [process.env.CONTACT_EMAIL!],
      subject,
      html,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ ok: true, id: data?.id ?? null });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message ?? "Unexpected error" },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
