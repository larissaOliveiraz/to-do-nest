import { Prisma } from '@prisma/client';

export type CreateTaskRequestDTO = {
  user_id: string;
  title: string;
  description: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  status: 'PENDING' | 'DOING' | 'DONE';
};
