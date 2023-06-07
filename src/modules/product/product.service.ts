import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StockService } from '../stocks/stock.service';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { Product, ProductDocument } from './entity/product.model';


@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<ProductDocument>,
    private readonly stockService: StockService
  ) {}

  async create(data: CreateProductDTO) {
    console.log( "data: ", data )
    try {
      const dataObject = {
        title: data.title,
        category: data.category,
        quantity: data.quantity,
        company: data.company,
        cartonPrice: data.cartonPrice,
        unitPrice: data.unitPrice,
        discountPrice: data.discountPrice,
        discountType: data.discountType
      };
      const toSaveProduct = new this.productModel(dataObject);
      console.log( "toSaveProduct: ", toSaveProduct )
      const Stock = await this.stockService.create({
        product: toSaveProduct._id,
        quantity: data.quantity,
      })

      toSaveProduct.stock = Stock._id;
      await toSaveProduct.save()

      // const Product = await this.productModel.create({...toSaveProduct, 
      //   stock: Stock._id
      // })
  
      // await Product.save();
      return toSaveProduct;
    } catch (error) {
      return error;
    }
    
  }

  async getSingle(_id: string) {
    return this.productModel.findById(_id);
  }

  async getAll(data: any) {
    console.log( "data :", data ) ;
    const { page = 0, limit = 10, sort = -1, deleted = false } = data;

      const response = await Promise.all([
        this.productModel
          .find({deleted: deleted})
          .sort({ CreatedAt: sort })
          .skip(page * limit)
          .limit(limit)
          .populate("stock"),
        this.productModel.countDocuments(),
      ]);

      return {
        data: response[0],
        limit,
        page,
        count: response[1],
      };
  }

  async deleteSingle(_id: string) {
    return this.productModel.deleteOne({ _id });
  }

  async deleteAll() {
    return this.productModel.deleteMany();
  }

  async update(_id: string, data: UpdateProductDTO) {
    const Product = await this.getSingle(_id);
    return this.productModel.findOneAndUpdate(
      { _id },
      {
        ...data,
      },
      { returnDocument: 'after' },
    );
  }

  async search(param: any){
    const {text} = param;
    return this.productModel.find({
          title: new RegExp(text, 'i')
    });
  }
}
