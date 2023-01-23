import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  name: string;

  @Prop()
  number: string;

  @Prop()
  address: string;

  @Prop()
  shopName: string;

  @Prop()
  receivable?: number;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
