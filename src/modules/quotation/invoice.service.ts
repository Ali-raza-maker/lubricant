import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuotationDTO } from './dto/create-quotation.dto';
// import { UpdateTaskDTO } from './dto/update-exp.dto';
import { Quotation, QuotationDocument } from './entity/quotation.model';

@Injectable()
export class QuotationService {
  constructor(
    @InjectModel(Quotation.name)
    private invoiceModel: Model<QuotationDocument>,
  ) {}

  async create(data: any) {
    console.log('Invoice data: -------', data);
    const invoice = await this.invoiceModel.create(data);
    invoice.items = data.items;
    await invoice.save();
    return invoice;
  }
}
