import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './invoice.controller';
import { Invoice, InvoiceSchema } from './entity/invoice.model';
import { InvoiceService } from './invoice.service';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Invoice.name,
        schema: InvoiceSchema,
      },
    ]),
  ],
  controllers: [TaskController],
  providers: [InvoiceService],
})
export class InvoiceModule {}
