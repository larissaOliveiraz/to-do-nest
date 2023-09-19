import { CreateTaskService } from '../create-task.service';
import { TaskMemoryRepository } from '../../../repositories/in-memory/task-memory.repository';

let repository: TaskMemoryRepository;
let service: CreateTaskService;

describe('Create Task Service', () => {
  beforeEach(async () => {
    repository = new TaskMemoryRepository();
    service = new CreateTaskService(repository);
  });

  it('should be able to create task', async () => {
    const { task } = await service.execute({
      title: 'Write test',
      description: 'Write unit tests',
      priority: 'HIGH',
      status: 'DOING',
      user_id: 'user-01',
    });

    expect(task.id).toEqual(expect.any(String));
  });
});
