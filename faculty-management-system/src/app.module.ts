import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { FacultyModule } from './faculty/faculty.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [FacultyModule,TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1489',
      database: 'faculty',
      autoLoadEntities: true,
      synchronize: true, 
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
