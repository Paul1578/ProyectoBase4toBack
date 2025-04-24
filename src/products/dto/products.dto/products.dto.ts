import { IsString, IsNotEmpty, IsInt, Min, MaxLength, IsPositive } from 'class-validator';

export class CreateProductsDto {
  @IsString({ message: 'El nombre del producto debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'El nombre del producto es obligatorio' })
  @MaxLength(100, { message: 'El nombre no puede tener más de 100 caracteres' })
  name: string;

  @IsString({ message: 'La descripción debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'La descripción del producto es obligatoria' })
  @MaxLength(255, { message: 'La descripción no puede superar los 255 caracteres' })
  description: string;

  @IsInt({ message: 'El stock debe ser un número entero' })
  @Min(0, { message: 'El stock no puede ser negativo' })
  @IsNotEmpty({ message: 'El stock es obligatorio' })
  stock: number;

}
