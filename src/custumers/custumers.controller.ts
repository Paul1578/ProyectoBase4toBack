import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CustumersService } from './custumers.service';
import { Customers } from './interface/customers.interface';

@Controller('custumers')
export class CustumersController {
    
    constructor(private readonly customersService: CustumersService){}

    @Get('ruta-error')
    @HttpCode(HttpStatus.NOT_FOUND)
    rutaConError(){
        return 'Esto es un error 404!! ';
    }
    
    @Get(':id')
        findR(@Res() response, @Param('id') id:number){
     if(id<100){
        return response.status(HttpStatus.OK).send(`Pagina del producto: ${id}`);
        }else{
     return response.status(HttpStatus.NOT_FOUND).send(`Producto con id ${id} not found`);
        }
    }
    
    //@Get()
    //getAllCustomers(): Customers[]{
    //    return this.customersService.getCustomers();
    //}
    @Get()
    getAll(){
        return 'estas en custumers'
    }

   //@Get(':id')
   //find(@Param('id') id: number) {
   //    return this.customersService.getCustomersById(+id);
   //}

   @Get(':id')
    find(@Param('id') id: number) {
        return `Producto con id : ${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    createCustomer(
        @Body() body,

    ){
        this.customersService.insert(body);
        return { message: 'Cliente Agregado con exito'}
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() body,
    ){
        return this.customersService.update(+id, body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number){
        this.customersService.delete(+id)
        return { message: 'Cliente Eliminado con exito'}
    }

   


}
