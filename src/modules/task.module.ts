import { Module } from '@nestjs/common';
import { TaskController } from '../controllers/task.controller';
import { PrismaService } from '../database/prisma';
import { TaskPrismaRepository } from '../repositories/prisma/task-prisma.repository';
import { ITaskRepository } from '../repositories/task.repository';
import { CreateTaskService } from '../services/tasks/create-task.service';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [
    CreateTaskService,
    PrismaService,
    {
      provide: ITaskRepository,
      useClass: TaskPrismaRepository,
    },
  ],
})
export class TaskModule {}
