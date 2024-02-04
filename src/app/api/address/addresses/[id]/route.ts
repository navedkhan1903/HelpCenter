import { connect } from "@/utils/dbConfig";
import Address from "@/models/addressModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  try {
    await connect();
    return NextResponse.json(await Address.find({ uid: context.params.id }));
  } catch {
    return NextResponse.error();
  }
}
