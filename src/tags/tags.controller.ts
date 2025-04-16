import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TagDto } from './dto/tag.dto/tag.dto';
import { Tag } from './tag/tag.interface';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {
    constructor(private readonly tagService: TagsService){}
    
    //uso get en errores personalizados
    @Get(':id')
    async find(@Param('id') id: string) {
        console.log(id, typeof id);
        return this.tagService.getId(id)
    } 
    
    //Uso de ValidacionPipe por ruta
    @Post()
    @UsePipes(new ValidationPipe())
    post(@Body()body: TagDto): Promise<Tag>{
        return this.tagService.insert(body);
    }
}
