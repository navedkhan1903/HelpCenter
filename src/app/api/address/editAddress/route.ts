import { connect } from "@/utils/dbConfig";
import Address from "@/models/addressModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { id, values, state } = await req.json();

    await Address.updateOne(
      { id: id },
      {
        phone: values.phone,
        altPhone: values.altPhone,
        pincode: values.pincode,
        locality: values.locality,
        address: values.address,
        city: values.city,
        state,
      },
    );

    return NextResponse.json({ message: "Address Updated Successfully" });
  } catch {
    return NextResponse.error();
  }
}
