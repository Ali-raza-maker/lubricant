import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsArray,
  IsBoolean,
  IsOptional
} from 'class-validator';

export class ProductsDto {
  @IsNotEmpty({ message: 'Price is missing' })
  @IsNumber()
  price: number;


  @IsString({ message: 'Product must be string' })
  @IsNotEmpty({ message: 'Product is missing' })
  product: string;
}

export class CreatePriceListDTO {
  @IsArray({ message: 'Products must be Array' })
  products: ProductsDto[];

  @IsNotEmpty({ message: 'List Reference is missing' })
  @IsString({ message: 'List Reference must be string' })
  listRef: string;

  @IsOptional()
  @IsBoolean()
  active?: Boolean;
}
  