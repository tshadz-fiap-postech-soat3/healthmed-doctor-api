import { Inject, Injectable } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { DoctorRepository } from './doctors.repository';

@Injectable()
export class DoctorsService {
  constructor(
    @Inject(DoctorRepository)
    private readonly doctorRepository: DoctorRepository,
  ) {}
  async create(createDoctorDto: CreateDoctorDto) {
    return await this.doctorRepository.insert(createDoctorDto);
  }

  async findAll() {
    return await this.doctorRepository.findAll();
  }

  async remove(id: number) {
    return await this.doctorRepository.delete(id);
  }
}
