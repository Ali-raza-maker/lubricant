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
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { ProductService } from './product.service';

@UseGuards(JwtAuthGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly todoService: ProductService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createRequest: CreateProductDTO) {
    return this.todoService.create(createRequest);
  }

  @Get('all')
  getAll() {
    return this.todoService.getAll();
  }

  @Get('/:_id')
  getSingle(@Param() _id: string) {
    return this.todoService.getSingle(_id);
  }

  @Patch('/:_id')
  @UsePipes(ValidationPipe)
  update(@Param() _id: string, @Body() updateRequest: UpdateProductDTO) {
    return this.todoService.update(_id, updateRequest);
  }

  @Delete('/:_id')
  deleteSingle(@Param() _id: string) {
    return this.todoService.deleteSingle(_id);
  }

  // @Delete('deleteAll')
  // deleteAll() {
  //   return this.todoService.deleteAll();
  // }
}
