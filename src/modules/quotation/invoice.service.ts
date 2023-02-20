import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quotation, QuotationDocument } from './entity/quotation.model';

@Injectable()
export class QuotationService {
  constructor(
    @InjectModel(Quotation.name)
    private invoiceModel: Model<QuotationDocument>,
  ) {}

  async create(data:any) {
    const invoice = await this.invoiceModel.create(data);
    invoice.items = data.items;
    await invoice.save();
    return invoice;
  }
}
