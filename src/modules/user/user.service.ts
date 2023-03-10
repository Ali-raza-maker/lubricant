import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDTO } from './dto/create-user.dto';
import { User, UserDocument } from './entity/user.model';

@Injectable()
export class UserService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name)
    private todoModel: Model<UserDocument>,
  ) {}

  async create(data: CreateUserDTO) {
    const user = await this.todoModel.find({email:data.email})
    if(user) 
        return {
          message:"User already exist!",
          code:400
        }
    const User = await this.todoModel.create({
      email: data.email,
      password: data.password,
    });
    return User;
  }

  async getSingle(createRequest: CreateUserDTO) {
    return this.todoModel.findOne({
      email: createRequest.email,
      password: createRequest.password,
    });
  }

  async signinLocal(dto: CreateUserDTO) {
    // retrieve user
    const user = await this.getSingle({
      email: dto.email,
      password: dto.password,
    });
    if (!user) throw new UnauthorizedException('Credentials incorrect');
    if (user.password !== dto.password)
      throw new UnauthorizedException('Credentials incorrect');

    return this.signUser(user.id, user.email, 'user');
  }
  async signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      type: type,
    });
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
