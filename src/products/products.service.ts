<<<<<<< HEAD
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Product } from './interfaces/product/product.interface';

@Injectable()
export class ProductsService {
    private products : Product[] = [
        {
            id:0,
            name: "Marco de fotos pequeño",
            description: "Marco ideal para fotos 15x15"
        },{
            id:1,
            name: "Marco de fotos mediano",
            description: "Marco ideal para fotos 25X25"
        },{ 
            id:2,
            name: "Marco de fotos grande",
            description: "Marco ideal para fotos 35x25"
        },{
            id:3,
            name: "Marco de fotos granades",
            description: "Marco ideal para fotos 45x35"
        },{
            id:4,
            name:"Marco semi grande",
            description:"muy largo"
        }
    ];
    getAll(): Product[] {
      try {
        return this.products;
      } catch (error) {
        throw new InternalServerErrorException('Error al obtener los productos');
      }
    }
  
    getId(id: number): Product {
      try {
        const product = this.products.find((item: Product) => item.id === id);
        if (!product) {
          throw new NotFoundException(`Producto con id ${id} no encontrado`);
        }
        return product;
      } catch (error) {
        if (error instanceof NotFoundException) throw error;
        throw new InternalServerErrorException(`Error al encontrar el producto con id ${id}`);
      }
    }
  
    insert(body: any): void {
      try {
        if (!body.name || !body.description) {
          throw new BadRequestException('Faltan campos obligatorios: name o description');
        }
  
        this.products = [
          ...this.products,
          {
            id: this.lastId() + 1,
            name: body.name,
            description: body.description,
          }
        ];
      } catch (error) {
        if (error instanceof BadRequestException) throw error;
        throw new InternalServerErrorException('Error al insertar el producto');
      }
    }
  
    update(id: number, body: any): void {
      try {
        const index = this.products.findIndex((item: Product) => item.id === id);
        if (index === -1) {
          throw new NotFoundException(`Producto con id ${id} no encontrado`);
        }
  
        if (!body.name || !body.description) {
          throw new BadRequestException('Faltan campos obligatorios: name o description');
        }
  
        const updatedProduct: Product = {
          id,
          name: body.name,
          description: body.description,
        };
  
        this.products[index] = updatedProduct;
      } catch (error) {
        if (error instanceof NotFoundException || error instanceof BadRequestException) throw error;
        throw new InternalServerErrorException(`Error al actualizar el producto con id: ${id}`);
      }
    }
  
    delete(id: number): void {
      try {
        const exists = this.products.some((item: Product) => item.id === id);
        if (!exists) {
          throw new NotFoundException(`Producto con id: ${id}, no encontrado`);
        }
  
        this.products = this.products.filter((item: Product) => item.id !== id);
      } catch (error) {
        if (error instanceof NotFoundException) throw error;
        throw new InternalServerErrorException(`Error al eliminar el producto con id: ${id}`);
      }
    }
  
    private lastId(): number {
      if (this.products.length === 0) return 0;
      return this.products[this.products.length - 1].id;
    }
}
=======
import { Injectable } from '@nestjs/common';
import { Product } from './interface/product/product.interface';

@Injectable()
export class ProductsService {
    private products: Product[] = [
        {
            id: 0,
            name: 'Vela aromática',
            description: 'Esta vela olor a rosas',
          },
          {
            id: 1,
            name: 'Marco de fotos pequeño',
            description: 'Marco ideal para fotos 10x15',
          },
          {
            id: 2,
            name: 'Marco de fotos mediano',
            description: 'Marco ideal para fotos 20x25',
          },
          {
            id: 3,
            name: 'Marco de fotos grande',
            description: 'Marco ideal para fotos 40x30',
          },
          {
            id: 4,
            name: 'Marco de fotos grande',
            description: 'Marco ideal para fotos 40x30',
          }
    ];

    getAll(): Product[] {
        return this.products;
    }

    //READ
    getId(id:number) {
        return this.products.find( (item: Product) => item.id == id);
    }

    //CREATE
    insert(body: any) {
        this.products = [
            ...this.products,
            {
                id: this.lastId() + 1,
                name: body.name,
                description: body.descripcion,
            }
        ]
    }
 
    //UPDATE
    update(id: number, body: any) {
        let product: Product = {
          id,
          name: body.name,
          description: body.description,
        }
        this.products = this.products.map( (item: Product) => {
          console.log(item, id, item.id == id);
          return item.id == id ? product : item;
        });
    }

    //DELETE
    delete(id: number) {
        this.products = this.products.filter( (item: Product) => item.id != id );
    }
    
    private lastId(): number {
        return this.products[this.products.length -1].id;
    }
}
>>>>>>> 2739e750dd9eeba46cf40d9396889330477f988e
