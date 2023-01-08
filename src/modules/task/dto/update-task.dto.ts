import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDate,
  Length,
} from 'class-validator';

export class UpdateTaskDTO {
  @IsString({ message: 'Title must be string' })
  @Length(3, 255)
  title: string;

  @IsString({ message: 'Title must be string' })
  @IsNotEmpty({ message: 'description is missing' })
  @Length(3)
  description: string;

  @IsNotEmpty({ message: 'start date is missing' })
  toDate: string;
  
  @IsNotEmpty({ message: 'end date is missing' })
  fromDate: string;
}
