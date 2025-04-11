import { Injectable, InternalServerErrorException, NotFoundException, BadRequestException,
  } from '@nestjs/common';
  import { Customers } from './interface/customers.interface';
  
  @Injectable()
  export class CustumersService {
    private customers: Customers[] = [
      {
        id: 1,
        name: "Miguel Sosa",
        age: 40,
        birthday: new Date('1997-02-06'),
      },
      {
        id: 2,
        name: "Cristioan Redin",
        age: 25,
        birthday: new Date('2000-02-06'),
      },
    ];
  
    getCustomers(): Customers[] {
      try {
        return this.customers;
      } catch (error) {
        throw new InternalServerErrorException('Error al obtener los clientes');
      }
    }
  
    getCustomersById(id: number): Customers {
      try {
        const customer = this.customers.find((item: Customers) => item.id === id);
        if (!customer) {
          throw new NotFoundException(`Cliente con id ${id} no encontrado`);
        }
        return customer;
      } catch (error) {
        if (error instanceof NotFoundException) throw error;
        throw new InternalServerErrorException(`Error al buscar el cliente con id ${id}`);
      }
    }
  
    insert(body: any): void {
      try {
        if (!body.name || !body.age || !body.birthday) {
          throw new BadRequestException('Faltan campos obligatorios: name, age o birthday');
        }
  
        this.customers = [
          ...this.customers,
          {
            id: this.lastId() + 1,
            name: body.name,
            age: body.age,
            birthday: new Date(body.birthday),
          },
        ];
      } catch (error) {
        if (error instanceof BadRequestException) throw error;
        throw new InternalServerErrorException('Error al insertar cliente');
      }
    }
  
    update(id: number, body: any): void {
      try {
        const index = this.customers.findIndex((item: Customers) => item.id === id);
        if (index === -1) {
          throw new NotFoundException(`Cliente con id ${id} no encontrado`);
        }
  
        if (!body.name || !body.age || !body.birthday) {
          throw new BadRequestException('Faltan campos obligatorios: name, age o birthday');
        }
  
        const updatedCustomer: Customers = {
          id,
          name: body.name,
          age: body.age,
          birthday: new Date(body.birthday),
        };
  
        this.customers[index] = updatedCustomer;
      } catch (error) {
        if (error instanceof NotFoundException || error instanceof BadRequestException) throw error;
        throw new InternalServerErrorException(`Error al actualizar el cliente con id ${id}`);
      }
    }
  
    delete(id: number): void {
      try {
        const exists = this.customers.some((item: Customers) => item.id === id);
        if (!exists) {
          throw new NotFoundException(`Cliente con id ${id} no encontrado`);
        }
  
        this.customers = this.customers.filter((item: Customers) => item.id !== id);
      } catch (error) {
        if (error instanceof NotFoundException) throw error;
        throw new InternalServerErrorException(`Error al eliminar el cliente con id ${id}`);
      }
    }
  
    private lastId(): number {
      if (this.customers.length === 0) return 0;
      return this.customers[this.customers.length - 1].id;
    }
  }
  