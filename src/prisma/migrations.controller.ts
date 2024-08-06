import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { exec } from 'child_process';

@Controller('migrations')
export class MigrationsController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get('run')
  async runMigrations(): Promise<string> {
    return new Promise((resolve, reject) => {
      exec(
        'npx prisma migrate dev --name init && npx ts-node src/prisma/seed.ts',
        (error, stdout, stderr) => {
          if (error) {
            reject(`Migration failed: ${stderr}`);
          } else {
            resolve(`Migration success: ${stdout}`);
          }
        },
      );
    });
  }
}
