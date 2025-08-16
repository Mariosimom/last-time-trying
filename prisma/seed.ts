import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

async function main() {
  const adminEmail = "admin@dubaielite.com";
  const password = "admin123";
  const hash = await bcrypt.hash(password, 10);
  await prisma.user.upsert({
    where: { email: adminEmail },
    update: { passwordHash: hash, role: "admin" },
    create: { email: adminEmail, name: "Admin", passwordHash: hash, role: "admin" }
  });

  // demo blocks
  await prisma.block.create({
    data: {
      type: "HERO",
      title: "Welcome to Prestige Properties",
      published: true,
      order: 0,
      data: { subtitle: "Exceptional Properties. Extraordinary Living." }
    }
  });
}

main().then(()=>{
  console.log("Seed complete");
  process.exit(0);
}).catch((e)=>{
  console.error(e);
  process.exit(1);
});
