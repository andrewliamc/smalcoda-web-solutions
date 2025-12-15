import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic email validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
    const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID_CHECKLIST;

    if (!MAILERLITE_API_KEY || !MAILERLITE_GROUP_ID) {
      console.error("MailerLite API key or Group ID not configured");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    // Subscribe to MailerLite Checklist group
    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
        groups: [MAILERLITE_GROUP_ID],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("MailerLite API error:", data);

      // Handle duplicate subscriber (already subscribed)
      if (response.status === 422 || response.status === 409) {
        return NextResponse.json(
          { error: "You're already subscribed!" },
          { status: 400 }
        );
      }

      throw new Error("Failed to subscribe to checklist");
    }

    // Return success with download URL
    return NextResponse.json(
      {
        success: true,
        message: "Successfully subscribed!",
        downloadUrl: "/downloads/smalcoda-website-launch-checklist.pdf",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
