import { Module } from '@nestjs/common';
import { PrismaService } from 'database/prisma';
import { TaskPrismaRepository } from 'repositories/prisma/task-prisma.repository';
import { ITaskRepository } from 'repositories/task.repository';
import { CreateTaskService } from 'services/tasks/create-task.service';

@Module({
  imports: [],
  controllers: [],
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
