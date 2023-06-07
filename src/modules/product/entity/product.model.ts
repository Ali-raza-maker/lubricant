import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';
import * as mongoose from 'mongoose';
import { Stock } from 'src/modules/stocks/entity/stock.model';

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

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Stock.name })
  stock: Stock;
  
  @Prop()
  CreatedAt: Date;

  @Prop()
  UpdatedAt?: Date;

  @Prop({ default: false })
  deleted?: Boolean;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
