import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { DoctorRepository } from './doctors.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [DoctorsController],
  providers: [DoctorsService, DoctorRepository, PrismaService],
})
export class DoctorsModule {}
