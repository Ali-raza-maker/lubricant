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

// @UseGuards(JwtAuthGuard)
@Controller('expense')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createRequest: CreateExpenseDTO) {
    return this.expenseService.create(createRequest);
  }

  @Get('single/:_id')
  getSingle(@Param() _id: string) {
    return this.expenseService.getSingle(_id);
  }

  @Get('all')
  getAll() {
    return this.expenseService.getAll();
  }

  @Patch('/:_id')
  @UsePipes(ValidationPipe)
  update(@Param() _id: string, @Body() updateRequest: CreateExpenseDTO) {
    return this.expenseService.update(_id, updateRequest);
  }

  @Delete('deleteSingle/:_id')
  deleteSingle(@Param() _id: string) {
    return this.expenseService.deleteSingle(_id);
  }

  @Delete('deleteAll')
  deleteAll() {
    return this.expenseService.deleteAll();
  }
}
