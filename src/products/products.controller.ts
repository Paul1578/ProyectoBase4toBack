import { Controller, Get, Post, Body, Param, Put, Delete, Patch, Query, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/products.dto/products.dto';
import { UpdateProductsDto } from './dto/products.dto/updateProduct.dto';
import { Product } from './entity/products.entity';
import { QueryProductDto } from './dto/products.dto/queryProducts.dto';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductsDto) {
    return this.productsService.create(createProductDto);
  }

  @Get('query')
  async getAll(@Query(new ValidationPipe({ transform: true })) query: QueryProductDto): Promise<Product[]> {
    return this.productsService.getAll(query);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Get('search-by-name')
  async searchProductsByName(@Query('name') name: string) {
    return this.productsService.searchProductsByName(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductsDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Put(':id')
  replace(@Param('id') id: string, @Body() createProductDto: CreateProductsDto) {
    return this.productsService.put(+id, createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
