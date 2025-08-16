import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const blocks = await prisma.block.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json({ blocks });
}

export async function POST(req: Request) {
  const body = await req.json();
  const created = await prisma.block.create({
    data: {
      title: body.title || null,
      type: body.type || "HERO",
      data: body.data || {},
      published: !!body.published,
      order: body.order ?? 0
    }
  });
  return NextResponse.json({ block: created });
}
