import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../database/prisma';
import { ITaskRepository } from '../task.repository';

@Injectable()
export class TaskPrismaRepository implements ITaskRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TaskUncheckedCreateInput) {
    const task = await this.prisma.task.create({
      data,
    });

    return task;
  }
}
