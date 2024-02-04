import { connect } from "@/utils/dbConfig";
import User from "../../../models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { name, uid } = await req.json();
    await User.updateOne({ uid: uid }, { name: name });

    return NextResponse.json({ message: "Name changed successfully" });
  } catch {
    return NextResponse.error();
  }
}
