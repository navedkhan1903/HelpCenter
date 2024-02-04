import User from "@/models/userModel";
import { connect } from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { uid, name, email } = await req.json();
    await new User({ uid, name, email }).save();

    return NextResponse.json({ message: "Sign up successful" });
  } catch {
    return NextResponse.error();
  }
}
