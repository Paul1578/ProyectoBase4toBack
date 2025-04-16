<<<<<<< HEAD
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
=======
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, Res } from '@nestjs/common';
import {ProductsService} from '../products/products.service';
import { Product } from './interface/product/product.interface';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    getAllProducts(): Product[] {
        return this.productsService.getAll();
    }
    
    @Post()
    @HttpCode(201)
    createProducts(
        @Body('name') name: string,
        @Body('description') description: string
    ) {
        this.productsService.insert({
            id: this.productsService.getAll().length,
            name,
            description
        });
    }

    @Get('inventario')
    getHelloInProducts(): string{
        return "Estamos en productos con una funcionalidad nueva!!"
    }
//Recibir un parametro en la URL
    // @Get(':id')
    // find(@Param() params) {
    //     return `Estas consultando el producto ${params.id}`;
    // }

//RECIBIR VARIOS PARAMETROS EN LA URL

    // @Get(':id/:size')
    // findWithSize( @Param() params) {
    //     return `productos con id: ${params.id} ----- size: ${params.size}`;
    // }

//DESESTRUCTURAR PARAMETROS DE URL

    // @Get(':id')
    // find(@Param('id') id: number) {
    //     return `Pagina del producto ${id}`;
    // }

//RECIBIR VARIOS PARAMETROS EN LA URL TIPADOS Y DESAGREGADOS

    @Get(':id/:size')
    findWithSize( @Param('id') id: number, @Param('size') size: string) {
        return `productos con id: ${id} ----- size: ${size}`;
    }

//USO DE POST

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    createProduct(@Body() body){
        return body
    }

    //@Post()
    //@HttpCode()
    //crearteProduct(
    //    @Body('name') name: string,
    //    @Body('description') description: string,
    //) {
    //    return `Crear producto ${name} con la descripcion: ${description}`;
    //}

    @Get('ruta-error-404')
    @HttpCode(HttpStatus.NOT_FOUND)
    rutaConError404() {
        return 'Esto es un error 404!! no existe';
    }

    //DECORADOR RES

    @Get(':id')
    find(@Res() response, @Param('id', ParseIntPipe) id:number) {
        if(id<100) {
            return response.status(HttpStatus.OK).send(`Pagina del producto: ${id}`);
        } else {
            return response.status(HttpStatus.NOT_FOUND).send(`Producto inexistente`);
        }
    }

    //DECORADOR PUT

    @Put(':id')
    update(@Param('id') id: number, @Body() body) {
        return `Estas haciendo una operacion de actualizacion del recurso ${id} con ${body.name} 
        y ${body.description}`;
    }

    //DECORADOR PATCH

    @Patch(':id')
    partialUpdate(@Param('id') id: number, @Body() body) {
        return `Actualización parcial del itam ${id}`;
    }

    //DECORADOR DELETE

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
        return `Hemos borrado el producto ${id}`;
    }



}
>>>>>>> 2739e750dd9eeba46cf40d9396889330477f988e
