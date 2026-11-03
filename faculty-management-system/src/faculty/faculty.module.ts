import { Module } from '@nestjs/common';
import { FacultyService } from './faculty.service.js';
import { FacultyController } from './faculty.controller.js';
import { Faculty } from './entities/faculty.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Faculty])],
  controllers: [FacultyController],
  providers: [FacultyService],
})
export class FacultyModule {}
