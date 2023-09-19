import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'guard/auth.guard';
import { CreateTaskDTO } from 'schemas/task.schema';
import { CreateTaskService } from 'services/tasks/create-task.service';

@Controller('/tasks')
export class TaskController {
  constructor(private createTaskService: CreateTaskService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() data: CreateTaskDTO, @Request() request) {
    const { sub } = request.user;

    await this.createTaskService.execute({
      ...data,
      user_id: sub,
    });
  }
}
