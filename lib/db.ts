import { PrismaClient } from "@prisma/client";

declare global {
  // Prevent multiple instances of Prisma Client in dev
  // (Next.js hot reloading can cause "Too many connections" otherwise)
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["error", "warn"],
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
