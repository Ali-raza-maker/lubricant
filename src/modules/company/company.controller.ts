import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { CreateCompanyDTO } from './dto/create-company.dto';
// import { UpdateCompanyDTO } from './dto/update-company.dto';
import { CompanyService } from './company.service';
import { JwtAuthGuard } from '../utils/guards/jwt-guard.guard';

@UseGuards(JwtAuthGuard)
@Controller('company')
export class CompanyController {
  constructor(private readonly todoService: CompanyService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createRequest: CreateCompanyDTO) {
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
  update(@Param() _id: string, @Body() updateRequest: CreateCompanyDTO) {
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
