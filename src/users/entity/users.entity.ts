import { Product } from "src/products/entity/products.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number 

    @Column('varchar',{length:50})
    name:string

    @Column('varchar',{length:50})
    last_name:string

    @Column('varchar', { length: 255, nullable: true })  
    descriptions: string;

    @Column('varchar',{length:50})
    email:string

    @Column()
    birthday:Date

    @Column('int',{width:10})
    identificacion:number

    @OneToMany(() => Product, product => product.user)  
    products: Product[];

}