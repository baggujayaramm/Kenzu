"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Seeding Kenzu curated data...');
    const devUser = await prisma.user.upsert({
        where: { email: 'lifestyle@kenzu.com' },
        update: {},
        create: {
            email: 'lifestyle@kenzu.com',
            name: 'Kenzu Ambassador',
            onboarded: true,
            tier: 'concierge',
        },
    });
    console.log(`✅ Seeded Dev User: ${devUser.email}`);
    console.log('✨ Seed complete.');
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map