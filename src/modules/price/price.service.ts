import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePriceListDTO } from './dto/create-price.dto';
// import { CreateStockDTO } from './dto/create-stock.dto';

import { PriceList, PriceListDocument } from './entity/price.model';

@Injectable()
export class PriceService {
  constructor(
    @InjectModel(PriceList.name)
    private priceModel: Model<PriceListDocument>,
  ) {}

  async create(data: CreatePriceListDTO) {
    let checkDuplicateRef = await this.priceModel.findOne({ listRef: data.listRef })
    if( checkDuplicateRef ){
      return {
        message:"List Ref Already Exist!",
        code:400
      }
    }
    const Price = await this.priceModel.create(data);
    await  Price.save();
    return Price;
  }

  async getSingle(_id: string) {
    return this.priceModel.findById(_id);
  }

  async getAll() {
    return this.priceModel.find().populate("products.product") ;
  }

  async deleteSingle(_id: string) {
    return this.priceModel.deleteOne({ _id });
  }

  async deleteAll() {
    return this.priceModel.deleteMany();
  }

  async update(_id: string, data: CreatePriceListDTO) {
    const priceList = await this.getSingle(_id);
    if( !priceList ){
      return {
        message:"List Ref Not Exist!",
        code:400
      }
    }
    let prepData ={};
    if( data?.products?.length ){
      prepData = {...prepData, products: data?.products }
    }
    if( data?.active != null && data?.active != undefined  ){
      prepData = {...prepData, active: data?.active }
    }
    return this.priceModel.findOneAndUpdate(
      { _id },
      {
        ...prepData,
      },
      { returnDocument: 'after' },
    );
  }
}
