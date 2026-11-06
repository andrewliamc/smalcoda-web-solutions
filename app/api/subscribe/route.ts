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

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_GROUP_ID = process.env.BREVO_GROUP_ID_CHECKLIST;

    if (!BREVO_API_KEY || !BREVO_GROUP_ID) {
      console.error("Brevo API key or Group ID not configured");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    // Subscribe to Brevo Checklist group
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        email: email,
        listIds: [parseInt(BREVO_GROUP_ID)],
        updateEnabled: false,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Brevo API error:", data);

      // Handle duplicate subscriber (already subscribed)
      if (response.status === 400 && data.code === "duplicate_parameter") {
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
