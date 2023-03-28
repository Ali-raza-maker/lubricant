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
    private expenseModel: Model<ExpenseDocument>,
  ) {}

  async create(data: CreateExpenseDTO) {
    const Expense = await this.expenseModel.create({
      title: data.title,
      description: data.description,
      date: new Date(data.date),
      amount: data.amount,
    });
    await Expense.save();
    return Expense;
  }

  async getSingle(_id: string) {
    return this.expenseModel.findById(_id);
  }

  async getAll() {
    return this.expenseModel.find();
  }

  async deleteSingle(_id: string) {
    return this.expenseModel.deleteOne({ _id });
  }

  async deleteAll() {
    return this.expenseModel.deleteMany();
  }

  async update(_id: string, data: CreateExpenseDTO) {
    return this.expenseModel.findOneAndUpdate(
      { _id },
      {
        ...data,
      },
      { returnDocument: 'after' },
    );
  }
}
