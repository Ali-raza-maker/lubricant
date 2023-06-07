import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, now } from 'mongoose';
import * as mongoose from 'mongoose';
import { Client } from 'src/modules/client/entity/client.model';
import { Type } from 'class-transformer';
import { Product } from 'src/modules/product/entity/product.model';

export type CashInvoiceDocument = CashInvoice & Document;

// @Schema()
class ProductDetails {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Product.name })
  @Type(() => Product)
  productId: Product;

  @Prop()
  quantity: number;

  @Prop()
  discount: number;

  @Prop()
  sub_total: number;
}

@Schema()
export class CashInvoice {
  @Prop()
  customer_name: string;

  @Prop()
  customer_address: string;

  @Prop()
  customer_town: string;

  @Prop()
  sale_invoice: string;

  @Prop()
  price_list_ref: string;

  @Prop({ required: false, default: new Date().toISOString() })
  date: Date;

  @Prop()
  total_amount: number;

  @Prop()
  items: ProductDetails[];

  @Prop()
  address: string;

  @Prop({default: now()})
    createdAt: Date;

    @Prop({default: now()})
    updatedAt: Date;
}

export const CashInvoiceSchema = SchemaFactory.createForClass(CashInvoice);

