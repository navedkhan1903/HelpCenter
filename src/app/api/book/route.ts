import { connect } from "@/utils/dbConfig";
import Booking from "@/models/bookingModel";
import { generateUniqueId } from "@/utils/functions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { uid, service, date, slot, address } = await req.json();

    await new Booking({
      id: generateUniqueId(),
      uid,
      service,
      date,
      slot,
      address,
      time: new Date(),
      status: "Booked",
    }).save();

    return NextResponse.json({ message: "Service Successfully Booked" });
  } catch (err) {
    return NextResponse.error();
  }
}
