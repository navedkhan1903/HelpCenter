import User from "@/models/userModel";
import { connect } from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  try {
    await connect();
    return NextResponse.json(await User.findOne({ uid: context.params.id }));
  } catch {
    return NextResponse.error();
  }
}
