import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuotationController } from './invoice.controller';
import { Quotation, QuotationSchema } from './entity/quotation.model';
import { QuotationService } from './invoice.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Quotation.name,
        schema: QuotationSchema,
      },
    ]),
  ],
  controllers: [QuotationController],
  providers: [QuotationService],
})
export class InvoiceModule {}
