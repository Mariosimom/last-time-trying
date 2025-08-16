import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(_: Request, { params }: { params: { id: string }}) {
  const id = Number(params.id);
  const block = await prisma.block.findUnique({ where: { id } });
  if (!block) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ block });
}

export async function PUT(req: Request, { params }: { params: { id: string }}) {
  const id = Number(params.id);
  const body = await req.json();
  const updated = await prisma.block.update({
    where: { id },
    data: {
      title: body.title ?? null,
      type: body.type ?? "HERO",
      data: body.data ?? {},
      published: !!body.published,
      order: body.order ?? 0
    }
  });
  return NextResponse.json({ block: updated });
}

export async function DELETE(_: Request, { params }: { params: { id: string }}) {
  const id = Number(params.id);
  await prisma.block.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
