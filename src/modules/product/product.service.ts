import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { Product, ProductDocument } from './entity/product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,
  ) {}

  async create(data: CreateProductDTO) {
       
     
    const Product = await this.productModel.create({
      title: data.title,
      category: data.category,
      quantity: data.quantity,
      company: data.company,
      cartonPrice: data.cartonPrice,
      unitPrice: data.unitPrice,
    });
     if (data.IsFixedDiscount === 'Fixed') {
       Product.discountFixed = data.fixedDiscount;
     } else {
       Product.discountPersentage = "17%";
     }
    await  Product.save();
    return Product;
  }

  async getSingle(_id: string) {
    return this.productModel.findById(_id);
  }

  async getAll() {
    return this.productModel.find();
  }

  async deleteSingle(_id: string) {
    return this.productModel.deleteOne({ _id });
  }

  async deleteAll() {
    return this.productModel.deleteMany();
  }

  async update(_id: string, data: UpdateProductDTO) {
    const Product = await this.getSingle(_id);
      Product.title = data.title;
      Product.category = data.category;
      Product.quantity = data.quantity;
      Product.company = data.company;
      Product.cartonPrice = parseInt(data.cartonPrice);
      Product.unitPrice = data.unitPrice;
     if (data.IsFixedDiscount === 'Fixed') {
       Product.discountFixed = data.fixedDiscount;
     } else {
       Product.discountPersentage = "17%";
     }
       
  }
}
