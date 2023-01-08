import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ExpenseDocument = Expense & Document;

@Schema()
export class Expense {
  @Prop()
  heading: string;

  @Prop()
  details: string;

  @Prop()
  amount: Date;

  @Prop()
  date: Date;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
