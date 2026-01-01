import { PrismaClient } from "@prisma/client"

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient(); // якщо глобально вже є prisma - використай її, якщо ні, то створи нову

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = db;
}