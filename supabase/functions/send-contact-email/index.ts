import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(async (req) => {
  try {
    const body = await req.json();

    const { name, email, subject, message } = body.record;

    const apiKey = Deno.env.get("RESEND_API_KEY");

    const emailContent = `
New Contact Message - Chef Station

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
    from: "Chef Station <onboarding@resend.dev>",
   to: "auns5757@gmail.com",
        subject: "New Contact Message",
        text: emailContent,
      }),
    });

    const result = await res.text();

    console.log("Email sent response:", result);

    return new Response(result, { status: 200 });

  } catch (err) {
    console.log("ERROR:", err);

    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
});