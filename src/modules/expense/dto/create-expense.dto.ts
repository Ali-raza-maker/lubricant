import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDate,
  Length,
} from 'class-validator';

export class CreateExpenseDTO {
  @IsString({ message: 'Title must be string' })
  @IsNotEmpty({ message: 'Title is missing' })
  @Length(3, 255)
  heading: string;

  @IsString({ message: 'Title must be string' })
  @IsNotEmpty({ message: 'description is missing' })
  @Length(3)
  details: string;

  @IsNotEmpty({ message: 'start date is missing' })
  amount: string;
  
  @IsNotEmpty({ message: 'end date is missing' })
  date: string;
}
