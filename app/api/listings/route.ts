import { NextResponse } from "next/server";
import { listListings } from "@/lib/listings";

export async function GET() {
  const data = await listListings();
  return NextResponse.json({ data });
}
