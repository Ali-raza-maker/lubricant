import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDate,
  Length,
} from 'class-validator';

class productDetails {
  productId: string;
  quantity: number;
  discount: number;
  sub_total: number;
}
export class CreateCashInvoiceDTO {
  @IsString({ message: 'Title must be string' })
  @IsNotEmpty({ message: 'Title is missing' })
  customer_name: string;

  @IsString({ message: 'Customer address must be string' })
  @IsNotEmpty({ message: 'Title is missing' })
  customer_address: string;

  @IsString({ message: 'Customer town must be string' })
  @IsNotEmpty({ message: 'Title is missing' })
  customer_town: string;

  @IsString({ message: 'sale invoice must be string' })
  @IsNotEmpty({ message: 'sale invoice is missing' })
  @Length(3)
  sale_invoice: string;

  @IsString({ message: 'price list refference must be string' })
  @IsNotEmpty({ message: 'price list refference is missing' })
  @Length(3)
  price_list_ref: string;

  @IsNotEmpty({ message: 'total amount is missing' })
  total_amount: number;

  @IsNotEmpty({ message: 'address amount is missing' })
  address: string;

  @IsNotEmpty({ message: 'date is missing' })
  date: string;

  items: productDetails[];
}
