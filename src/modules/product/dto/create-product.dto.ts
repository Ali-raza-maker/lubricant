import {
  IsString,
  IsNotEmpty,
  Length,
} from 'class-validator';

export class CreateProductDTO {
  @IsString({ message: 'Title must be string' })
  @Length(3, 255)
  title: string;

  @IsString({ message: 'Category must be string' })
  @Length(3)
  category: string;

  @IsNotEmpty({ message: 'Quantity is missing' })
  quantity: number;

  @IsNotEmpty({ message: 'Capmany is missing' })
  company: string;

  @IsNotEmpty({ message: 'Discount is missing' })
  IsFixedDiscount: string;

  @IsString({ message: 'Invalid discount persentage' })
  fixedDiscount: number;

  @IsNotEmpty({ message: 'Carton price is missing' })
  cartonPrice: string;

  @IsNotEmpty({ message: 'unit price is missing' })
  unitPrice: number;
}
