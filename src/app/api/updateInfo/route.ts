import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { id, name, email } = await req.json();
    const user = await User.findById(id);

    user.name = name;
    user.email = email;
    await user.save();

    return NextResponse.json(
      {
        message: "Personal Information Updated Successfully",
      },
      { status: 200 },
    );
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
