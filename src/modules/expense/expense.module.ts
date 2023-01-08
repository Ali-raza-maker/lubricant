import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './expense.controller';
import { Expense, ExpenseSchema } from './entity/expense.model';
import { ExpenseService } from './expense.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Expense.name,
        schema: ExpenseSchema,
      },
    ]),
  ],
  controllers: [TaskController],
  providers: [ExpenseService],
})
export class ExpenseModule {}
