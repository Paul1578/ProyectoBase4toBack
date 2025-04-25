import { Module } from '@nestjs/common';
import {ProductsService} from './products.service';
import { Product } from './entity/products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';
import { Size } from 'src/size/entities/size.entity';
import { User } from 'src/users/entity/users.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product, Size, User]), 
      
      ],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}
