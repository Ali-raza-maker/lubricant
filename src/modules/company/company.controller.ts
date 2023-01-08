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
import { CreateCompanyDTO } from './dto/create-company.dto';
// import { UpdateCompanyDTO } from './dto/update-company.dto';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly todoService: CompanyService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createRequest: CreateCompanyDTO) {
    return this.todoService.create(createRequest);
  }

  @Get('/:_id')
  getSingle(@Param() _id: string) {
    return this.todoService.getSingle(_id);
  }

  @Get('all')
  getAll() {
    return this.todoService.getAll();
  }

  @Patch('/:_id')
  update(@Param() _id: string, @Body() updateRequest: CreateCompanyDTO) {
    return this.todoService.update(_id, updateRequest);
  }

  @Delete('deleteSingle/:_id')
  deleteSingle(@Param() _id: string) {
    return this.todoService.deleteSingle(_id);
  }

  @Delete('deleteAll')
  deleteAll() {
    return this.todoService.deleteAll();
  }
}
