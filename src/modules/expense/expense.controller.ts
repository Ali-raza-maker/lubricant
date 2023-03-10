import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { JwtAuthGuard } from '../utils/guards/jwt-guard.guard';
import { CreateExpenseDTO } from './dto/create-expense.dto';
// import { UpdateTaskDTO } from './dto/update-task.dto';
import { ExpenseService } from './expense.service';

@UseGuards(JwtAuthGuard)
@Controller('todo')
export class TaskController {
  constructor(private readonly todoService: ExpenseService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createRequest: CreateExpenseDTO) {
    return this.todoService.create(createRequest);
  }

  @Get('single/:_id')
  getSingle(@Param() _id: string) {
    return this.todoService.getSingle(_id);
  }

  @Get('all')
  getAll() {
    return this.todoService.getAll();
  }

  @Patch('/:_id')
  @UsePipes(ValidationPipe)
  update(@Param() _id: string, @Body() updateRequest: CreateExpenseDTO) {
    return this.todoService.update(_id, updateRequest);
  }

  @Delete('deleteSingle/:_id')
  deleteSingle(@Param() _id: string) {
    return this.todoService.deleteSingle(_id);
  }

  @Delete('deleteAll')
  deleteAll() {
    return this.todoService.deleteAll();
  }
}
