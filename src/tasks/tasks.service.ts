import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
@Injectable()
export class TasksService {
  private tasks = [
    {
      id: 0,
      name: 'task 1',
      description: 'task 1 description',
      status: 'Undone',
    },
    {
      id: 1,
      name: 'task 2',
      description: 'task 2 description',
      status: 'Undone',
    },
  ];

  getTasks() {
    return this.tasks;
  }

  getTask(id: string | number) {
    const task = this.tasks.find((task) => task.id === +id);
    if (!task) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return task;
  }

  createTask(createTaskDto: CreateTaskDto) {
    const { name, description, status } = createTaskDto;
    const id = this.tasks.length;
    const task = { id, name, description, status };
    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, updateTaskDto: CreateTaskDto) {
    const task = this.getTask(id);
    const { name, description, status } = updateTaskDto;
    task.name = name;
    task.description = description;
    task.status = status;
    return task;
  }

  deleteTask(id: number) {
    const task = this.getTask(id);
    this.tasks = this.tasks.filter((task) => task.id !== +id);
    return task;
  }
}
