import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInvoiceDTO } from './dto/create-invoice.dto';
// import { UpdateTaskDTO } from './dto/update-exp.dto';
import { Invoice, InvoiceDocument } from './entity/invoice.model';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectModel(Invoice.name)
    private invoiceModel: Model<InvoiceDocument>,
  ) {}

 async create(data: any){
    const invoice = await this.invoiceModel.create(data);
    invoice.items = data.items;
    await invoice.save();
    return invoice;
  }
}
