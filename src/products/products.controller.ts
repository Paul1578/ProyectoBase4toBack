import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    @Get()
  getHelloInProducts(): string {
     return "Muchacho tamo en produccion";
    }
  @Get('hot')
        getSpecialProducts(): string {
     return "Los productos calientes 😈";
    }
    @Get(':id')
        find(@Param() params) {
     return `El producto que estas consulatando es el${params.id}`;
    }
    // @Get(':id/:size')
    //     findWithSize( @Param() params) {
    //  return `En esta ruta obtenemos el producto ${params.id}, pero en su tamaño ${params.size}`;
    // }
    // @Get(':id/:size')
    //  findWithSize( @Param() params) {
    //  return `En esta ruta obtenemos el producto ${params.id}, pero en su tamaño ${params.size}`;
    // }
    @Get(':id/:size')
     findWithSize(@Param('id') id: number, @Param('size') size: string ) {
     return `Página de detalle de producto ${id}, en tamaño ${size}`;
    }
    // @Post()
    // createProduct() {
    //   return 'Estamos atendiendo una solicitud de tipo Post';
    // }
    // @Post()
    // createProduct(@Body() body) {
    //   return `Creo un producto ${body.name} con descripción ${body.description}`;
    // }
    // @Post()
    //  createProduct(@Body() body) {
    //  return body;
    // }
    @Post()
    createProduct(
      @Body('name') name: string, 
      @Body('description') description: string
    ) {
      return `Creo el producto ${name} con descripción ${description}.`;
    }
     
}
