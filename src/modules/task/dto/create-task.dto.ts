import { IsString, IsNotEmpty, MinLength, MaxLength, IsDate, Length } from 'class-validator';

export class CreateTaskDTO {
  @IsString({ message: 'Title must be string' })
  @IsNotEmpty({ message: 'Title is missing' })
  @Length(3,255)
  title: string;
  @IsString({ message: 'Description must be string' })
  @IsNotEmpty({ message: 'Description is missing' })
  @Length(3)
  description: string;
  @IsNotEmpty({ message: 'Date is missing' })
  date: string;
}
