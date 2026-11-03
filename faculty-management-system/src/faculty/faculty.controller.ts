import { Controller, Post, Body } from '@nestjs/common';
import { FacultyService } from './faculty.service.js';
import { CreateFacultyDto } from './dto/faculty.dto.js';

@Controller('faculties')
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}

  @Post('create-faculty')
  create(@Body() createFacultyDto: CreateFacultyDto) {
    return this.facultyService.create(createFacultyDto);
  }
}