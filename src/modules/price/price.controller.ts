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
  import { CreatePriceListDTO } from './dto/create-price.dto';
  import { PriceService } from './price.service';
  
  // @UseGuards(JwtAuthGuard)
  @Controller('price')
  export class PriceListController {
    constructor(private readonly priceService: PriceService) {}
  
    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createRequest: CreatePriceListDTO) {
      return this.priceService.create(createRequest);
    }
  
    @Get('all')
    getAll() {
      return this.priceService.getAll();
    }
  
    @Get('/:_id')
    getSingle(@Param() _id: string) {
      return this.priceService.getSingle(_id);
    }
  
    @Patch('/:_id')
    @UsePipes(ValidationPipe)
    update(@Param() _id: string, @Body() updateRequest: CreatePriceListDTO) {
      return this.priceService.update(_id, updateRequest);
    }
  
    @Delete('deleteAll')
    deleteAll() {
      return this.priceService.deleteAll();
    }
    @Delete('/:_id')
    deleteSingle(@Param() _id: string) {
      return this.priceService.deleteSingle(_id);
    }
  }
  