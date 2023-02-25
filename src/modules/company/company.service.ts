import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDTO } from './dto/create-company.dto';
// import { UpdateTaskDTO } from './dto/update-task.dto';
import { Company, CompanyDocument } from './entity/company.model';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private todoModel: Model<CompanyDocument>,
  ) {}

  async create(data: CreateCompanyDTO) {
    const Todo = await this.todoModel.create({
      title: data.title,
      description: data.description,
    });
    Todo.date = new Date();
    await Todo.save();
    return Todo;
  }

  async getSingle(_id: string) {
    return this.todoModel.findById(_id);
  }

  async getAll() {
    return this.todoModel.find();
  }

  async deleteSingle(_id: string) {
    return this.todoModel.deleteOne({ _id });
  }

  async deleteAll() {
    return this.todoModel.deleteMany();
  }

  async update(_id: string, data: CreateCompanyDTO) {
    
    const company =  await this.getSingle(_id);
    if(!company)
      return {
        message:"Company don't exist!",
        code:404
      }
    return this.todoModel.updateOne(
      { _id },
      {
        ...data,
      },
    );
  }
}
