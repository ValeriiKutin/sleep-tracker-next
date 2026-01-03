import { PrismaClient } from "@prisma/client"
import { PrismaPg } from '@prisma/adapter-pg';

declare global {
    var prisma: PrismaClient | undefined;
}

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});

export const db = globalThis.prisma || new PrismaClient({ adapter }); // якщо глобально вже є prisma - використай її, якщо ні, то створи нову

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = db;
}