import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.doctor.deleteMany();

  await prisma.doctor.createMany({
    data: [
      {
        id: 1,
        name: 'Doctor-1',
        specialization: 'General',
        crm: 'CRM-SP-XXX.XX1',
        email: 'doctor.1@example.com',
        password: 'password-examples',
        address: 'address-1',
      },
      {
        id: 2,
        name: 'Doctor-2',
        specialization: 'General',
        crm: 'CRM-SP-XXX.XX2',
        email: 'doctor.2@example.com',
        password: 'password-examples',
        address: 'address-2',
      },
      {
        id: 3,
        name: 'Doctor-3',
        specialization: 'General',
        crm: 'CRM-SP-XXX.XX3',
        email: 'doctor.3@example.com',
        password: 'password-examples',
        address: 'address-3',
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
