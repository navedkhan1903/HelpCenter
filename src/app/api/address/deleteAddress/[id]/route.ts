import Address from "@/models/addressModel";
import { connect } from "@/utils/dbConfig";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  try {
    await connect();
    await Address.deleteOne({ id: context.params.id });

    return NextResponse.json({ message: "Address successfully deleted" });
  } catch {
    return NextResponse.error();
  }
}
