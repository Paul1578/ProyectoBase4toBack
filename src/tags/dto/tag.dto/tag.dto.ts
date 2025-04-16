import { IsInt, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class TagDto {
    @IsString()
    @MinLength(0)
    @MaxLength(30)
    @Matches(
        /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {message : 'El nombre solo debe contener letras y espacios'}
    )
    name: string;

    @IsString()
    @MinLength(0)
    @MaxLength(100)
    description: string;

    @IsString()
    @MinLength(0)
    @Matches(
        /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, {message : 'El nombre solo debe contener letras y espacios'}
    )
    slug?: string;

    @IsInt({message: 'El stock deb ser un numero entero'})
    
    stock: number;
}
