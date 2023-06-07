import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    UsePipes,
    ValidationPipe,
    Patch,
    UseGuards,
  } from '@nestjs/common';
  import { JwtAuthGuard } from '../utils/guards/jwt-guard.guard';
  import { CreateStockDTO } from './dto/create-stock.dto';
  import { StockService } from './stock.service';
  
  // @UseGuards(JwtAuthGuard)
  @Controller('stock')
  export class StockController {
    constructor(private readonly stockService: StockService) {}
  
    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createRequest: CreateStockDTO) {
      return this.stockService.create(createRequest);
    }
  
    @Get('all')
    getAll() {
      return this.stockService.getAll();
    }
  
    @Get('/:_id')
    getSingle(@Param() _id: string) {
      return this.stockService.getSingle(_id);
    }
  
    @Patch('/:_id')
    @UsePipes(ValidationPipe)
    update(@Param() _id: string, @Body() updateRequest: CreateStockDTO) {
      return this.stockService.update(_id, updateRequest);
    }
  
    @Delete('deleteAll')
    deleteAll() {
      return this.stockService.deleteAll();
    }
    @Delete('/:_id')
    deleteSingle(@Param() _id: string) {
      return this.stockService.deleteSingle(_id);
    }
  }
  