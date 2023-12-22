import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { uid, name, email } = await req.json();
    await new User({ uid: uid, name: name, email: email }).save();

    return NextResponse.json(
      { message: "Sign up successful" },
      { status: 201 },
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
