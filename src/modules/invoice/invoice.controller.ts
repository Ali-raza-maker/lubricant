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
import { JwtAuthGuard } from '../utils/guards/jwt-guard.guard';
import { CreateInvoiceDTO } from './dto/create-invoice.dto';
// import { UpdateTaskDTO } from './dto/update-task.dto';
import { InvoiceService } from './invoice.service';

@UseGuards(JwtAuthGuard)
@Controller('invoice')
export class TaskController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  createInvoive(@Body() createInvoiceRequest: CreateInvoiceDTO) {
    return this.invoiceService.create(createInvoiceRequest);
  }
}
