import { NextResponse } from "next/server";

export async function GET() {
  const stats = [
    {
      icon: "/donation.png",
      label: "Purchases",
      value: "0.00 INR",
    },
    {
      icon: "/gift.png",
      label: "Redemptions",
      value: "0.00 INR",
    },
    {
      icon: "/transaction.png",
      label: "Rej. Transactions",
      value: "0.00 INR",
    },
    {
      icon: "/profit.png",
      label: "SIP Rejections",
      value: "0.00 INR",
    },
    {
      icon: "/graph.png",
      label: "New SIP",
      value: "0.00 INR",
    },
  ];

  return NextResponse.json(stats);
}
