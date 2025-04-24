import { Module } from '@nestjs/common';
import {ProductsService} from './products.service';
import { Product } from './entity/products.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsController } from './products.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product]), 
                   
      ],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule {}
