import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { CreateQuotationDTO } from './dto/create-quotation.dto';
// import { UpdateTaskDTO } from './dto/update-task.dto';
import { QuotationService } from './invoice.service';

@Controller('invoice')
export class QuotationController {
  constructor(private readonly invoiceService: QuotationService) {}

  @Post()
  createInvoive(@Body() createInvoiceRequest: CreateQuotationDTO) {
    return this.invoiceService.create(createInvoiceRequest);
  }
  
}
