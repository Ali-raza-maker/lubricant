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
import { CreateUserDTO } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly todoService: UserService) {}

  @Post('create')
  @UsePipes(ValidationPipe)
  create(@Body() createRequest: CreateUserDTO) {
    return this.todoService.create(createRequest);
  }

  @Post('login')
  signinLocal(@Body() dto: CreateUserDTO) {
    return this.todoService.signinLocal(dto);
  }

  // @Post('login')
  // getSingle(@Body() createRequest: CreateUserDTO) {
  //   return this.todoService.getSingle(createRequest);
  // }

  //   @Get('allTask')
  //   getAll() {
  //     return this.todoService.getAll();
  //   }

  //   @Patch('/:_id')
  //   update(@Param() _id: string, @Body() updateRequest: UpdateUserDTO) {
  //     return this.todoService.update(_id, updateRequest);
  //   }

  //   @Delete('deleteSingle/:_id')
  //   deleteSingle(@Param() _id: string) {
  //     return this.todoService.deleteSingle(_id);
  //   }

  //   @Delete('deleteAll')
  //   deleteAll() {
  //     return this.todoService.deleteAll();
  //   }
}
