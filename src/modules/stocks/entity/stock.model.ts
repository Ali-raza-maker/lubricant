import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema, now } from 'mongoose';
// import { ProductSchema } from '../../product/entity/product.model'
import * as mongoose from 'mongoose';
export type StockDocument = Stock & Document;

@Schema()
export class Stock {
    @Prop({ type: mongoose.Schema.Types.ObjectId , ref: 'Product' })
    product:  Types.ObjectId 

    @Prop()
    quantity: number;

    @Prop({default: now()})
    createdAt: Date;

    @Prop({default: now()})
    updatedAt: Date;
}
export const StockSchema = SchemaFactory.createForClass(Stock);
