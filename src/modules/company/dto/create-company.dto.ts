import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDate,
  Length,
} from 'class-validator';

export class CreateCompanyDTO {
  @IsString({ message: 'Title must be string' })
  @IsNotEmpty({ message: 'Title is missing' })
  @Length(3, 255)
  title: string;
  @IsString({ message: 'Description must be string' })
  @IsNotEmpty({ message: 'Sescription is missing' })
  @Length(3)
  description: string;
  @IsNotEmpty({ message: 'Start Date is missing' })
  date: string;
}
