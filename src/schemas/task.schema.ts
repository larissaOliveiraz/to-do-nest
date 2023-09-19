import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const TaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']),
  status: z.enum(['PENDING', 'DOING', 'DONE']),
});

export class CreateTaskDTO extends createZodDto(TaskSchema) {}
