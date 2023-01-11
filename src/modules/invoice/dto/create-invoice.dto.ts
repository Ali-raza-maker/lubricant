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
export class CreateInvoiceDTO {
  @IsString({ message: 'Title must be string' })
  @IsNotEmpty({ message: 'Title is missing' })
  clientId: string;

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

  @IsNotEmpty({ message: 'recived amount is missing' })
  recived_amount: number;

  @IsNotEmpty({ message: 'remaining amount is missing' })
  remaining_amount: number;

  remarks: string;

 @IsNotEmpty({ message: 'date is missing' })
  date: string;

  // items: Array<productDetails>;
}
