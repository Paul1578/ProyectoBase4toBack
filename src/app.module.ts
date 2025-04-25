import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersController } from './customers/customers.controller';
import { UsersController } from './controllers/users/users.controller';
import { CustomersService } from './customers/customers.service';
import { ProductsModule } from './products/products.module';
import { TagsModule } from './tags/tags.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entity/users.entity';
import { Product } from './products/entity/products.entity';
import { SizeModule } from './size/size.module';
import { Size } from './size/entities/size.entity';


@Module({
  imports: [
    ProductsModule, 
    TagsModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin123',
      database: 'midb',
      entities: [User, Product, Size],
      synchronize: true,
      logging: true,
    }),
    SizeModule,
  ],
  controllers: [AppController, CustomersController, UsersController],
  providers: [AppService, CustomersService],
})
export class AppModule {}

