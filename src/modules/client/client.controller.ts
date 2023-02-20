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
import { CreateClientDTO } from './dto/create-client.dto';
import { ClientService } from './client.service';
import { JwtAuthGuard } from '../utils/guards/jwt-guard.guard';

@UseGuards(JwtAuthGuard)
@Controller('client')
export class ClientController {
  constructor(private readonly todoService: ClientService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createRequest: CreateClientDTO) {
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
  @UsePipes(ValidationPipe)
  update(@Param() _id: string, @Body() updateRequest: CreateClientDTO) {
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
