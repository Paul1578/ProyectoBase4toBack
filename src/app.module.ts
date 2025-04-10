import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CustumersController } from './custumers/custumers.controller';
import { UsersController } from './controllers/users/users.controller';
import { ProductsService } from './products/products.service';
import { CustimersService } from './custimers/custimers.service';
import { CustumersService } from './custumers/custumers.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CustumersController, UsersController],
  providers: [AppService, ProductsService, CustimersService, CustumersService],
})
export class AppModule {}
