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
import { UpdateClientDTO } from './dto/update-client.dto';

// @UseGuards(JwtAuthGuard)
@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createRequest: CreateClientDTO) {
    return this.clientService.create(createRequest);
  }

  @Get('all')
  getAll() {
    return this.clientService.getAll();
  } 
  
  @Get('/:_id')
  getSingle(@Param() _id: string) {
    return this.clientService.getSingle(_id);
  }

  @Patch('/:_id')
  @UsePipes(ValidationPipe)
  update(@Param() _id: string, @Body() updateRequest: UpdateClientDTO) {
    return this.clientService.update(_id, updateRequest);
  }

  @Delete('all')
  deleteAll() {
    return this.clientService.deleteAll();
  }

  @Delete('deleteSingle/:_id')
  deleteSingle(@Param() _id: string) {
    return this.clientService.deleteSingle(_id);
  }
}
