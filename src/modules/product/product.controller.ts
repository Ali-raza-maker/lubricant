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

// @UseGuards(JwtAuthGuard)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createRequest: CreateProductDTO) {
    return this.productService.create(createRequest);
  }

  @Get('all')
  getAll() {
    return this.productService.getAll();
  }

  @Get('/:_id')
  getSingle(@Param() _id: string) {
    return this.productService.getSingle(_id);
  }

  @Patch('/:_id')
  @UsePipes(ValidationPipe)
  update(@Param() _id: string, @Body() updateRequest: UpdateProductDTO) {
    return this.productService.update(_id, updateRequest);
  }

  @Delete('deleteAll')
  deleteAll() {
    return this.productService.deleteAll();
  }
  @Delete('/:_id')
  deleteSingle(@Param() _id: string) {
    return this.productService.deleteSingle(_id);
  }

  @Get('/search/:text')
  search(@Param() text: string) {
    return this.productService.search(text);
  }
}
