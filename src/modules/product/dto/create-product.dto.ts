import {
  IsString,
  IsNotEmpty,
  Length,
  IsNumber,
} from 'class-validator';

export class CreateProductDTO {
  @IsString({ message: 'Title must be string' })
  @Length(3, 255)
  title: string;

  @IsString({ message: 'Category must be string' })
  category: string;

  @IsNotEmpty({ message: 'Quantity is missing' })
  quantity: number;

  @IsNotEmpty({ message: 'Capmany is missing' })
  company: string;

  @IsNotEmpty({ message: 'Discount is missing' })
  discountType: string;

  @IsNumber()
  discountPrice: number;

  @IsNotEmpty({ message: 'Carton price is missing' })
  cartonPrice: number;

  @IsNotEmpty({ message: 'unit price is missing' })
  unitPrice: number;
}
