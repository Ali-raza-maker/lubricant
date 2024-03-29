import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateClientDTO } from './dto/create-client.dto';
import { Client, ClientDocument } from './entity/client.model';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name)
    private clientModel: Model<ClientDocument>,
  ) {}

  async create(data: CreateClientDTO) {
    console.log("nmcbacak" , data)
    return await this.clientModel.create(data);
  }

  async getSingle(_id: string) {
    return this.clientModel.findById(_id);
  }

  async getAll() {
    return this.clientModel.find();
  }

  async deleteSingle(_id: string) {
    return this.clientModel.deleteOne({ _id });
  }


  async update(_id: string, data: CreateClientDTO) {
    return this.clientModel.findOneAndUpdate(
      { _id },
      {
        ...data,
      },
      { returnDocument: 'after' },
    );
  }

  
  async deleteAll() {
    return this.clientModel.deleteMany();
  }
}
