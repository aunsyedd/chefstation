import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(async (req) => {
  try {
   const body = await req.json();
    const record = body.record;

    const apiKey = Deno.env.get("RESEND_API_KEY");

    const emailContent = `
New Customer Message - Chef Station

Name: ${record.name || "N/A"}
Email: ${record.email || "N/A"}
Subject: ${record.subject  || "N/A"}
Message: ${record.message || "N/A"}
`;


    
   // 🟢 SEND EMAIL
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Chef Station <onboarding@resend.dev>",
        to: "auns5757@gmail.com",
        subject: "New Table Reservation",
        text: emailContent,
      }),
    });

    const result = await res.text();

    return new Response(result, { status: 200 });

  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
});


