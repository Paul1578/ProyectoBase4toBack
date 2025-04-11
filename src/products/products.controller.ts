import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './interfaces/product/product.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService:ProductsService){}

  @Get()
  getAllProducts(): Product[] {
    return this.productService.getAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.productService.getId(id);
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  createProduct(
    @Body() body,
  ) {
    this.productService.insert(body);
    return { message: 'Producto Agregado con exito'}
  }
  @Put(':id')
  update(
    @Param('id') id: number, 
    @Body() body,
  ) {
    return this.productService.update(id, body), { message: 'Producto Actualizado con exito'};
     
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id') id: number) {
    this.productService.delete(id), { message: 'Producto Borrado con exito'};
    
  }

}
