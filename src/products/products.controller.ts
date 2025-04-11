import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put, Query, Res } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService:ProductsService){}

  //@Get()
  //getAllProducts(): Product[] {
  //  return this.productService.getAll();
  //}

  @Get()
  getAll(){
    return { message: 'Usted esta en productos' }
  }
  

  //@Get(':id')
  //find(@Param('id') id: number) {
  //  return this.productService.getId(+id);
  //}
  @Get(':id')
  find(@Param('id')id: number){
    return { message: `Producto con id: ${id} `}
  }

  //@Post()
  //@HttpCode(HttpStatus.NO_CONTENT)
  //createProduct(
  //  @Body() body,
  //) {
  //  this.productService.insert(body);
  //  return { message: 'Producto Agregado con exito'}
  //}
  @Post()
  createProduct(@Body('name')name: string, @Body('description')description: string){
    return { message: `Producto ${name} con descripcion ${description} Agregado con exito`}
  }


  //@Put(':id')
  //update(
  //  @Param('id') id: number, 
  //  @Body() body,
  //) {
  //  return this.productService.update(+id, body);
  //   
  //}

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body('') body,
  ) {
    return `Acualizaste el Producto con id ${id} `
  }

  //@Delete(':id')
  //@HttpCode(HttpStatus.NO_CONTENT)
  //delete(@Param('id') id: number) {
  //  this.productService.delete(+id);
  //}

  @Delete(':id')
  delete(@Param('id') id: number) {
    return `Haz elimindo el producto con id ${id}`;
  }
}
