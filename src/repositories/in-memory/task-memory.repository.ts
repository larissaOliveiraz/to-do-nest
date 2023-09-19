import { randomUUID } from 'crypto';
import { Prisma, Task } from '@prisma/client';
import { ITaskRepository } from '../task.repository';

export class TaskMemoryRepository implements ITaskRepository {
  private tasks: Task[] = [];

  async create(data: Prisma.TaskUncheckedCreateInput) {
    const task: Task = {
      id: data.id ? data.id : randomUUID(),
      title: data.title,
      description: data.description,
      priority: data.priority,
      status: data.status,
      created_at: new Date(),
      user_id: data.user_id,
    };

    this.tasks.push(task);

    return task;
  }
}
