import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  date: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
