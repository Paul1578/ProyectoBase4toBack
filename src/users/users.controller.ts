import { Controller, Get, Post, Param, Body} from '@nestjs/common';
import { UserService } from './users.service'; 
import { User } from './users.entity';


@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(+id); // convierte string a number
    }

    @Post()
    create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }
}