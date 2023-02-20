import {
  Controller,
  Post,
  Body,
  ValidationPipe,
  UsePipes
} from '@nestjs/common';
import { CreateCashInvoiceDTO } from './dto/create-cash-invoice.dto';
import { CashInvoiceService } from './cash-invoice.service';

@Controller('cash-invoice')
export class CashInvoiceController {
  constructor(private readonly invoiceService: CashInvoiceService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createInvoive(@Body() createInvoiceRequest: CreateCashInvoiceDTO) {
    return this.invoiceService.create(createInvoiceRequest);
  }
}
