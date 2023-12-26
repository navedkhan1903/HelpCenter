export const revalidate = 0;

import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Testimonial from "@/models/testimonialModel";

export async function GET() {
  try {
    await connect();
    const res = await Testimonial.find();
    const data = res.sort(() => Math.random() - 0.5);

    return NextResponse.json(data.slice(0, 4), { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
