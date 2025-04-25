import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeController } from './size.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Size } from './entities/size.entity';
import { Product } from 'src/products/entity/products.entity';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
          TypeOrmModule.forFeature([Size, Product]), 
          ProductsModule                    
        ],
  controllers: [SizeController],
  providers: [SizeService],
})
export class SizeModule {}
