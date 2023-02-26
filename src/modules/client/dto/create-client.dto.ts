import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDate,
  Length,
  IsNumber,
} from 'class-validator';

export class CreateClientDTO {
  @IsString({ message: 'Title must be string' })
  @IsNotEmpty({ message: 'Title is missing' })
  @Length(3, 255)
  name: string;

  @IsString({ message: 'Title must be string' })
  @IsNotEmpty({ message: 'description is missing' })
  @Length(11)
  number: string;

  @IsNotEmpty({ message: 'start date is missing' })
  address: string;

  @IsNotEmpty({ message: 'end date is missing' })
  shopName: string;

  @IsNotEmpty({ message: 'reciveable is missing' })
  receivable: number;
}
