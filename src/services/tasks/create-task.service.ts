import { Injectable } from '@nestjs/common';
import { CreateTaskRequestDTO } from 'dto/task.dto';
import { ITaskRepository } from 'repositories/task.repository';

@Injectable()
export class CreateTaskService {
  constructor(private taskRepository: ITaskRepository) {}

  async execute({
    title,
    description,
    endAt,
    priority,
    status,
    user_id,
  }: CreateTaskRequestDTO) {
    const task = await this.taskRepository.create({
      title,
      description,
      end_at: endAt,
      priority,
      status,
      user_id,
    });

    return { task };
  }
}
