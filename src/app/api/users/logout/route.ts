import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout successful",
      success: true,
    });
    response.cookies.set("token", "", {
      httpOnly: true, //Restrict access to JS
      expires: new Date(0),
    });
    return response;
  } catch (err: any) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
