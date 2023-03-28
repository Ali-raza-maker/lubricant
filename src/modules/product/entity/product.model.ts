import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  title: string;

  @Prop()
  category: string;

  @Prop()
  quantity: number;

  @Prop()
  company: string;

  @Prop()
  discountPrice: number;

  @Prop()
  discountType?: string;

  @Prop()
  cartonPrice: number;

  @Prop()
  unitPrice: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
