import { IsEnum, MinLength } from 'class-validator';

export class CreateTaskDto {
  @MinLength(3)
  name: string;

  @MinLength(3)
  description: string;

  @IsEnum(['Done', 'In progress', 'Undone'], { message: 'Use correct status' })
  status!: string;
}
