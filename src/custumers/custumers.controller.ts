import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { CustumersService } from './custumers.service';
import { Customers } from './interface/customers.interface';

@Controller('custumers')
export class CustumersController {
    
    constructor(private readonly customersService: CustumersService){}
    
    @Get()
    getAllCustomers(): Customers[]{
        return this.customersService.getCustomers();
    }

    @Get()
    find(@Param(':id') id: number) {
        return this.customersService.getCustomersById(id);
    }

    @Post()
    @HttpCode(HttpStatus.OK)
    createCustomer(
        @Body() body,

    ){
        this.customersService.insert(body);
        return { message: 'Cliente Agregado'}
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() body,
    ){
        return this.customersService.update(id, body)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number){
        this.customersService.delete(id)
    }





    @Get('query')
        rutaQuery(@Query() query) {
        return `El dato query, x ha resivido el valor ${query.x} y el valor de y es ${query.y} `;
    }


}
