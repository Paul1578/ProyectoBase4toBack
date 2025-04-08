import { Controller, Get, Query } from '@nestjs/common';

@Controller('custumers')
export class CustumersController {
    @Get('query')
        rutaQuery(@Query() query) {
        return `El dato query, x ha resivido el valor ${query.x} y el valor de y es ${query.y} `;
    }

    
}
