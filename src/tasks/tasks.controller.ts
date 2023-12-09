import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UnauthorizedException,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('tasks')
@UseGuards(BeltGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // Get /tasks --> []
  @Get()
  getTasks() {
    try {
      return this.tasksService.getTasks();
    } catch (err) {
      throw new NotFoundException('No tasks found');
    }
  }

  // Get /tasks/:id --> { ... }
  @Get(':id')
  getOneTask(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.tasksService.getTask(id);
    } catch (err) {
      throw new NotFoundException('Task not found');
    }
  }

  // Post /tasks
  @Post()
  createTask(@Body(new ValidationPipe()) createTaskDto: CreateTaskDto) {
    try {
      return this.tasksService.createTask(createTaskDto);
    } catch (err) {
      throw new BadRequestException('Task not created');
    }
  }

  // Patch /tasks/:id --> { ... }
  @Patch(':id')
  updateTask(
    @Param('id') id: string,
    @Body(new ValidationPipe()) updateTaskDto: CreateTaskDto,
  ) {
    try {
      return this.tasksService.updateTask(id, updateTaskDto);
    } catch (err) {
      throw new UnauthorizedException('Task cannot be updated');
    }
  }

  // Delete /tasks/:id
  @Delete(':id')
  removeTask(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.tasksService.deleteTask(+id);
    } catch (err) {
      throw new BadRequestException('Failed to delete');
    }
  }
}
