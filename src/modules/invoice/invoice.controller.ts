import {
  Controller,
  Post,
  Body,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../utils/guards/jwt-guard.guard';
import { CreateInvoiceDTO } from './dto/create-invoice.dto';
import { InvoiceService } from './invoice.service';

@UseGuards(JwtAuthGuard)
@Controller('invoice')
export class TaskController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createInvoive(@Body() createInvoiceRequest: CreateInvoiceDTO) {
    return this.invoiceService.create(createInvoiceRequest);
  }
}
