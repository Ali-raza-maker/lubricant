import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { User, UserDocument } from './entity/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private todoModel: Model<UserDocument>,
  ) {}

  async create(data: CreateUserDTO) {
    const User = await this.todoModel.create({
      email: data.email,
      password: data.password,
    });
    return User;
  }

  async getSingle(createRequest: CreateUserDTO) {
    return this.todoModel.findOne({email: createRequest.email , password: createRequest.password});
  }

  //   async getAll() {
  //     return this.todoModel.find();
  //   }

  //   async deleteSingle(_id: string) {
  //     return this.todoModel.deleteOne({ _id });
  //   }

  //   async deleteAll() {
  //     return this.todoModel.deleteMany();
  //   }

  //   async update(_id: string, data: UpdateUserDTO) {
  //     return this.todoModel.updateOne(
  //       { _id },
  //       {
  //         ...data,
  //       },
  //     );
  //   }
}
