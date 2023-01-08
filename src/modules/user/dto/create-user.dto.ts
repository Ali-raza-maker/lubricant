import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDate,
  Length,
  IsEmail,
} from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty({ message: 'Email is missing' })
  @Length(3, 255)
  email: string;
  @IsString({ message: 'Password must be string' })
  @IsNotEmpty({ message: 'passowrd is missing' })
  @Length(3)
  password: string;
}
