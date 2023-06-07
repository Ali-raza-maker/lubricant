import {
    IsString,
    IsNotEmpty,
    MinLength,
    MaxLength,
    IsDate,
    Length,
  } from 'class-validator';
  
  class productDetails {
    product: string;
    quantity: number;
  }
  export class CreateStockDTO {
    @IsNotEmpty({ message: 'Product is missing' })
    product: string;

    @IsNotEmpty({ message: 'Quantity is Required' })
    quantity: number;
  }
  