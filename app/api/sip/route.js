import { NextResponse } from "next/server";

export async function GET() {
  const SIP = [
    {
      id: 1,
      title: "Current",
      value: "1.25 Cr",
      unit: "Cr",
      momChange: "+5.2%",
      changeType: "up",
    },
  ];
  return NextResponse.json(SIP);
}
