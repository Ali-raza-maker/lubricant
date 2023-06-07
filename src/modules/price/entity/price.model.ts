import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema, now } from 'mongoose';
import * as mongoose from 'mongoose';
import { Product } from 'src/modules/product/entity/product.model';
export type PriceListDocument = PriceList & Document;

@Schema()
export class PriceList {

    @Prop({
        type:[{
            product:{
                type:mongoose.Schema.Types.ObjectId , 
                ref: Product.name
            },
            unitPrice:{type:Number}, 
            cartonPrice:{type:Number}
        }]
    })
    products: { cartonPrice: number, unitPrice: number; product: Product }[];

    @Prop()
    listRef: string;

    @Prop({ required: false, default: false })
    active: Boolean;

    @Prop({default: now()})
    createdAt: Date;

    @Prop({default: now()})
    updatedAt: Date;
}
export const PriceListSchema = SchemaFactory.createForClass(PriceList);
