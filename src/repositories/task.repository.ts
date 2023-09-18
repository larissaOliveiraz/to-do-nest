import { Prisma, Task } from '@prisma/client';

export abstract class ITaskRepository {
  abstract create(data: Prisma.TaskUncheckedCreateInput): Promise<Task>;
}
