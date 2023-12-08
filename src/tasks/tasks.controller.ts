import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';

@Controller('tasks')
export class TasksController {
  // Get /tasks --> []
  @Get()
  gettasks() {
    return [];
  }

  // Get /tasks/:id --> { ... }
  @Get(':id')
  getonetask(@Param('id') id: string) {
    return {
      id,
    };
  }

  // Post /tasks
  @Post()
  createTasks(@Body() createTaskDto: CreateTaskDto) {
    return {
      name: createTaskDto.name,
    };
  }
  // Put /tasks/:id --> { ... }
  @Put(':id')
  updateTasks(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      id,
      name: updateUserDto,
    };
  }

  // Patch /tasks/:id --> { ... }
  @Patch(':id')
  patchTasks(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return {
      id,
      name: updateUserDto,
    };
  }

  // Delete /tasks/:id
  @Delete(':id')
  removeTasks(@Param('id') id: string) {
    return {
      id,
    };
  }
}
