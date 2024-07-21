import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorsModule } from './doctors/doctors.module';
import { MigrationsController } from './prisma/migrations.controller';
import { PrismaService } from './prisma/prisma.service';
@Module({
  imports: [DoctorsModule],
  controllers: [AppController, MigrationsController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
