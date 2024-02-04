export const revalidate = 0;

import { NextResponse } from "next/server";
import { connect } from "@/utils/dbConfig";
import Testimonial from "@/models/testimonialModel";

export async function GET() {
  try {
    await connect();
    const res = await Testimonial.find();

    return NextResponse.json(res.sort(() => Math.random() - 0.5).slice(0, 4));
  } catch {
    return NextResponse.error();
  }
}
