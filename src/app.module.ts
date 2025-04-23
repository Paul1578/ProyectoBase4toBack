import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { CustomersController } from './customers/customers.controller';
import { UsersController } from './controllers/users/users.controller';
import { ProductsService } from './products/products.service';
import { CustomersService } from './customers/customers.service';
import { ProductsModule } from './products/products.module';
import { TagsModule } from './tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entity/users.entity';
import { Product } from './products/entity/products.entity';


@Module({
  imports: [ProductsModule, TagsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',  
    port: 5432,
    username: 'admin', 
    password: 'admin123', 
    database: 'midb', 
    entities:[User, Product],
    synchronize: true,  
    logging: true,  
  }), UsersModule
],
  controllers: [AppController, ProductsController, CustomersController, UsersController],
  providers: [AppService, CustomersService],
})
export class AppModule {}
