import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateExpenseDTO } from './dto/create-expense.dto';
// import { UpdateTaskDTO } from './dto/update-exp.dto';
import { Expense, ExpenseDocument } from './entity/expense.model';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel(Expense.name)
    private todoModel: Model<ExpenseDocument>,
  ) {}

  async create(data: CreateExpenseDTO) {
    const Todo = await this.todoModel.create({
      heading: data.heading,
      details: data.details,
      amount: data.amount,
    });
    Todo.date = new Date(data.date);
    await Todo.save();
    return Todo;
  }

  async getSingle(_id: string) {
    return this.todoModel.findById(_id);
  }

  async getAll() {
    return this.todoModel.find();
  }

  async deleteSingle(_id: string) {
    return this.todoModel.deleteOne({ _id });
  }

  async deleteAll() {
    return this.todoModel.deleteMany();
  }

  async update(_id: string, data: CreateExpenseDTO) {
    return this.todoModel.findOneAndUpdate(
      { _id },
      {
        ...data,
      },
      { returnDocument: 'after' },
    );
  }
}
