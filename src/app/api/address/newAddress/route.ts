import { connect } from "@/utils/dbConfig";
import Address from "@/models/addressModel";
import { generateUniqueId } from "@/utils/functions";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { uid, values, state } = await req.json();

    await new Address({
      id: generateUniqueId(),
      uid,
      phone: values.phone,
      altPhone: values.altPhone,
      pincode: values.pincode,
      locality: values.locality,
      address: values.address,
      city: values.city,
      state,
    }).save();

    return NextResponse.json({ message: "Address saved successfully" });
  } catch {
    return NextResponse.error();
  }
}
