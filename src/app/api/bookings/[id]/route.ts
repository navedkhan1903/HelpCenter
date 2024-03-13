import { connect } from "@/utils/dbConfig";
import Booking from "@/models/bookingModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, context: any) {
  try {
    await connect();
    return NextResponse.json(await Booking.find({ uid: context.params.id }));
  } catch (err: any) {
    return NextResponse.error();
  }
}
