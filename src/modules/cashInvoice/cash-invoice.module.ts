import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CashInvoiceController } from './cash-invoice.controller';
import { CashInvoice, CashInvoiceSchema } from './entity/cash-invoice.model';
import { CashInvoiceService } from './cash-invoice.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CashInvoice.name,
        schema: CashInvoiceSchema,
      },
    ]),
  ],
  controllers: [CashInvoiceController],
  providers: [CashInvoiceService],
})
export class CashInvoiceModule {}
