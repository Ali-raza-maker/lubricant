import {
  Controller,
  Post,
  Body,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from '../utils/guards/jwt-guard.guard';
import { CreateQuotationDTO } from './dto/create-quotation.dto';
import { QuotationService } from './invoice.service';

@UseGuards(JwtAuthGuard)
@Controller('invoice')
export class QuotationController {
  constructor(private readonly invoiceService: QuotationService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createInvoive(@Body() createInvoiceRequest: CreateQuotationDTO) {
    return this.invoiceService.create(createInvoiceRequest);
  }
}
