import { SizeEntity } from 'src/size/entities/size.entity';
import { User } from 'src/users/entity/users.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 100 })
    name: string;

    @Column('varchar', { length: 255 })
    description: string;

    @Column('int')
    stock: number;

    
    @ManyToOne(() => User, user => user.products) 
    @JoinColumn({ name: 'user_id' })
    user: User;
    @ManyToMany(() => SizeEntity, size => size.products, { cascade: true })
    @JoinTable({
        name: 'product_sizes',
        joinColumn: {
            name: 'product_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'size_id',
            referencedColumnName: 'id',
        },
    })
    sizes: SizeEntity[];
}
