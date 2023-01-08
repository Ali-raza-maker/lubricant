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
  @IsNotEmpty({ message: 'Category date is missing' })
  category: string;

  @IsString({ message: 'Quantity must be string' })
  @IsNotEmpty({ message: 'Quantity date is missing' })
  quantity: number;

  @IsString({ message: 'Quantity must be string' })
  @IsNotEmpty({ message: 'Capmany date is missing' })
  company: string;

  @IsString({ message: 'Quantity must be string' })
  @IsNotEmpty({ message: 'Discount date is missing' })
  IsFixedDiscount: string;

  @IsString({ message: 'Quantity must be string' })
  @IsNotEmpty({ message: 'Invalid discount is missing' })
  fixedDiscount: number;

  @IsString({ message: 'Carton Price must be string' })
  @IsNotEmpty({ message: 'Carton price is missing' })
  cartonPrice: string;

  @IsString({ message: 'Unit Price must be string' })
  @IsNotEmpty({ message: 'unit price is missing' })
  unitPrice: number;
}
