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

    // TODO: Connect to your email service provider and add to mailing list
    // For now, this is a placeholder that logs the email
    console.log("Checklist download request:", email);

    // PLACEHOLDER: Add email to your mailing list
    // Example for ConvertKit or Mailchimp integration here

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
