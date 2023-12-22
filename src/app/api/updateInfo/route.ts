import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { id, name, email, pass } = await req.json();
    const user = await User.findById(id);

    user.name = name;
    user.email = email;
    user.pass = pass;
    await user.save();

    return NextResponse.json({ message: "Changes Saved" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
