import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';
import * as mongoose from 'mongoose';
import { Client } from 'src/modules/client/entity/client.model';
import { Type } from 'class-transformer';
import { Product } from 'src/modules/product/entity/product.model';

export type InvoiceDocument = Invoice & Document;

// @Schema()
class ProductDetails {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Product.name })
  @Type(() => Product)
  productId: Product;

  @Prop()
  quantity: string;

  @Prop()
  discount: string;

  @Prop()
  sub_total: string;
}

@Schema()
export class Invoice {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Client.name })
  @Type(() => Client)
  clientId: Client;

  @Prop()
  sale_invoice: string;

  @Prop()
  price_list_ref: string;

  @Prop({ required: false, default: new Date().toISOString() })
  date: Date;

  @Prop()
  total_amount: number;

  @Prop()
  reciveed_amount: number;

  @Prop()
  remaining_amount: number;

  @Prop()
  remarks: string;

  @Prop()
  items: ProductDetails[];
}

export const InvoiceSchema = SchemaFactory.createForClass(Invoice);

