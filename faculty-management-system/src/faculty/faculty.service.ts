import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity.js';
import { CreateFacultyDto } from './dto/faculty.dto.js';

@Injectable()
export class FacultyService {
  constructor(
    @InjectRepository(Faculty)
    private readonly facultyRepo: Repository<Faculty>,
  ) {}

  async create(dto: CreateFacultyDto): Promise<Faculty> {
    const faculty = this.facultyRepo.create(dto);
    return this.facultyRepo.save(faculty);
  }
}