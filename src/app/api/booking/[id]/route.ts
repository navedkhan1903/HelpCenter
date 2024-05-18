import { connect } from "@/utils/dbConfig";
import Booking from "@/models/bookingModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  try {
    await connect();
    return NextResponse.json(await Booking.findOne({ id: context.params.id }));
  } catch {
    return NextResponse.error();
  }
}
