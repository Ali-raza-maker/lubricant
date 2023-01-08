import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  date: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
