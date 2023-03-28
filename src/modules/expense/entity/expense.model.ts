import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExpenseDocument = Expense & Document;

@Schema()
export class Expense {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  amount: Number;

  @Prop()
  date: Date;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
