import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCashInvoiceDTO } from './dto/create-cash-invoice.dto';
// import { UpdateTaskDTO } from './dto/update-exp.dto';
import { CashInvoice, CashInvoiceDocument } from './entity/cash-invoice.model';

@Injectable()
export class CashInvoiceService {
  constructor(
    @InjectModel(CashInvoice.name)
    private invoiceModel: Model<CashInvoiceDocument>,
  ) {}

  async create(data: any) {
    const invoice = await this.invoiceModel.create(data);
    invoice.items = data.items;
    await invoice.save();
    return invoice;
  }
}
