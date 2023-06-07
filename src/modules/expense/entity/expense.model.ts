import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';

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

  @Prop({default: now()})
    createdAt: Date;

    @Prop({default: now()})
    updatedAt: Date;
}

export const ExpenseSchema = SchemaFactory.createForClass(Expense);
