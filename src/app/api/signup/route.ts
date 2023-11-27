import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    await connect();
    const { name, email, pass } = await request.json();
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { message: "Email already in use" },
        { status: 400 },
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPass = await bcryptjs.hash(pass, salt);
    await new User({ name: name, email: email, pass: hashedPass }).save();

    return NextResponse.json(
      { message: "Sign in successful" },
      { status: 201 },
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
