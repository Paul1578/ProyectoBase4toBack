import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { IsNotEmpty, IsString, Length, IsEnum } from 'class-validator';
import { Product } from 'src/products/entity/products.entity';
@Entity()
export class Size {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  size: string;

  @Column({
    type: 'enum',
    enum: ['USA', 'EU', 'LATAM'],
    default: 'LATAM',
    nullable: false,
  })
  @IsEnum(['USA', 'EU', 'LATAM'])
  region: 'USA' | 'EU' | 'LATAM';

  @Column({
    type: 'enum',
    enum: ['hombre', 'mujer', 'niño'],
    default: 'hombre',
    nullable: false,
  })
  @IsEnum(['hombre', 'mujer', 'niño'])
  type: 'hombre' | 'mujer' | 'niño';

  @ManyToMany(() => Product, product => product.sizes)
  products: Product[];
}
