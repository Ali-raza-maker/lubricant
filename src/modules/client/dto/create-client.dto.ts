import {
  IsString,
  IsNotEmpty,
  Length,
  IsNumber,
} from 'class-validator';

export class CreateClientDTO {
  @IsString({ message: 'Title must be string' })
  @IsNotEmpty({ message: 'Title is missing' })
  @Length(3, 255)
  name: string;

  @IsString({ message: 'Phone must be string' })
  @IsNotEmpty({ message: 'Phone is missing' })
  @Length(13)
  phone: string;

  @IsString({ message: 'Address must be string' })
  @IsNotEmpty({ message: 'Address is missing' })
  address: string;

  @IsNotEmpty({ message: 'Description is missing' })
  description: string;

  @IsNotEmpty({ message: 'Reciveable is missing' })
  @IsNumber()
  receivable: number;
}
