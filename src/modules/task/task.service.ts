import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { Task, TaskDocument } from './entity/task.model';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private todoModel: Model<TaskDocument>,
  ) {}

  async create(data: CreateTaskDTO) {
    const Todo = await this.todoModel.create({
      title: data.title,
      description: data.description,
    });
    Todo.toDate = new Date(data.toDate);
    Todo.fromDate = new Date(data.fromDate);
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

  async update(_id: string, data: UpdateTaskDTO) {
    return this.todoModel.updateOne(
      { _id },
      {
        ...data,
      },
    );
  }
}
