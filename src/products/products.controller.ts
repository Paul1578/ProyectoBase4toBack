import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entity/products.entity';
import { CreateProductsDto } from './dto/products.dto/products.dto';
import { UpdateProductsDto } from './dto/products.dto/updateProduct.dto';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

 
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }

  
  @Post()
  async create(@Body() createProductDto: CreateProductsDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductsDto,
  ): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }

  
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.productsService.remove(id);
  }
}
