import { Test, TestingModule } from '@nestjs/testing';
import { DoctorsController } from './doctors.controller';
import { DoctorsService } from './doctors.service';
import { DoctorRepository } from './doctors.repository';
import { PrismaService } from '../prisma/prisma.service';

describe('DoctorsController', () => {
  let controller: DoctorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DoctorsController],
      providers: [DoctorsService, DoctorRepository, PrismaService],
    }).compile();

    controller = module.get<DoctorsController>(DoctorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
