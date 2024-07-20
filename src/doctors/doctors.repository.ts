import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorRepository {
  constructor(private prisma: PrismaService) {}

  async insert(doctor: CreateDoctorDto): Promise<Doctor> {
    return await this.prisma.doctor.create({
      data: doctor,
    });
  }

  async findAll(): Promise<Doctor[]> {
    return await this.prisma.doctor.findMany();
  }

  async delete(id: number): Promise<void> {
    this.prisma.doctor.delete({
      where: {
        id: id,
      },
    });
  }
}
