import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Kenzu curated data...');

  // Seed curated waitlist tier if needed (optional)
  
  // Seed basic user for dev
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
  
  // Seed some curated products for Commerce feed (Note: Table not explicitly shared in my knowledge, but keeping it as a comment template for logic)
  /*
  await prisma.product.createMany({
    data: [
      { name: 'Oura Ring Gen 4', category: 'Health', price: 29999, description: 'The gold standard in sleep tracking.' },
      { name: 'Technogym MyRun', category: 'Fitness', price: 350000, description: 'The ultimate minimalist treadmill.' },
    ],
  });
  */

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
