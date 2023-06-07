import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { Product, ProductSchema } from './entity/product.model';
import { ProductService } from './product.service';
import { StockModule } from '../stocks/stock.module';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
    StockModule
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
