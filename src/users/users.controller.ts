import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entity/users.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(Number(id));
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
  return this.usersService.create(createUserDto);
}

@Patch(':id')
update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
  return this.usersService.update(+id, updateUserDto);
}

@Delete(':id')
remove(@Param('id') id: string): Promise<void> {
  return this.usersService.remove(+id);
}
@Put(':id')
updateComplete(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
  return this.usersService.updateComplete(+id, updateUserDto);
}

}