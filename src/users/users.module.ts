import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';   
import { User } from './entity/users.entity';         
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ProductsModule } from 'src/products/products.module';
import { Product } from 'src/products/entity/products.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Product]), 
    ProductsModule           
  ],
  providers: [ UsersService ],
  controllers: [ UsersController ],
  exports: [ UsersService ],
})
export class UsersModule {}