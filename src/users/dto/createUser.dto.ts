import { IsNotEmpty, IsString, IsEmail, IsDate, IsInt, IsOptional, IsArray } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  descriptions: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  birthday: Date;

  @IsNotEmpty()
  @IsInt()
  identificacion: number;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  productIds: number[];  
}
