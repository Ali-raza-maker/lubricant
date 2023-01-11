import {
  Controller,
  Post,
  Body
} from '@nestjs/common';
import { CreateCashInvoiceDTO } from './dto/create-cash-invoice.dto';
// import { UpdateTaskDTO } from './dto/update-task.dto';
import { CashInvoiceService } from './cash-invoice.service';

@Controller('cash-invoice')
export class CashInvoiceController {
  constructor(private readonly invoiceService: CashInvoiceService) {}

  @Post()
  createInvoive(@Body() createInvoiceRequest: CreateCashInvoiceDTO) {
    return this.invoiceService.create(createInvoiceRequest);
  }
}
