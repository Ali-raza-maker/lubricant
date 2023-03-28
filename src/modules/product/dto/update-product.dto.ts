import {
  IsString,
  IsNotEmpty,
  Length,
} from 'class-validator';

export class UpdateProductDTO {

  @IsString({ message: 'Title must be string' })
  @Length(3, 255)
  title: string;

  @IsString({ message: 'Category must be string' })
  category: string;

  @IsNotEmpty({ message: 'Quantity is missing' })
  quantity: number;

  @IsString({ message: 'Company name must be string' })
  @IsNotEmpty({ message: 'Capmany date is missing' })
  company: string;

  @IsString({ message: 'Is Fixed Discount must be string' })
  @IsNotEmpty({ message: 'Discount date is missing' })
  discountType: string;

  @IsNotEmpty({ message: 'Invalid discount is missing' })
  discountPrice: number;

  @IsNotEmpty({ message: 'Carton price is missing' })
  cartonPrice: number;

  @IsNotEmpty({ message: 'Unit price is missing' })
  unitPrice: number;
}
