import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PriceListController } from './price.controller';
import { PriceList, PriceListSchema } from './entity/price.model';
import { PriceService } from './price.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PriceList.name,
        schema: PriceListSchema,
      },
    ]),
  ],
  controllers: [PriceListController],
  providers: [PriceService],
})
export class PriceListModule {}
