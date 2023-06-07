import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateStockDTO } from './dto/create-stock.dto';
import { Stock, StockDocument } from './entity/stock.model';


@Injectable()
export class StockService {
  constructor(
    @InjectModel(Stock.name)
    private stockModel: Model<StockDocument>,
  ) {}

  async create(data: CreateStockDTO) {
    console.log( "data: ", data )
    let found = await this.stockModel.findOne({
      product: data.product,
    });
    console.log("found: ", found)
    let Stock = null;
    if( found ){
      found.quantity += data.quantity;
      Stock = await found.save();
    }else{
      Stock = await this.stockModel.create({
        product: data.product,
        quantity: data.quantity
      });
      await Stock.save();
    }
    console.log( "Updated: ", Stock )
     
   
    return Stock;
  }

  async getSingle(_id: string) {
    return this.stockModel.findById(_id);
  }

  async getAll() {
    return this.stockModel.find().populate("product") ;
  }

  async deleteSingle(_id: string) {
    return this.stockModel.deleteOne({ _id });
  }

  async deleteAll() {
    return this.stockModel.deleteMany();
  }

  async update(_id: string, data: CreateStockDTO) {
    const Product = await this.getSingle(_id);
    return this.stockModel.findOneAndUpdate(
      { _id },
      {
        ...data,
      },
      { returnDocument: 'after' },
    );
  }

//   async search(param){
//     const {text} = param;
//     return this.stockModel.find({
//           title: new RegExp(text, 'i')
//     });
//   }
}
