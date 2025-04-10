import { Injectable } from '@nestjs/common';
import { Customers } from './interface/customers.interface';

@Injectable()
export class CustumersService {
    private customers : Customers[] = [
        {   
            id: 1,
            name: "Miguel Sosa",
            age: 40,
            birthday: new Date('1997-02-06')
        },
        {   
            id: 2,
            name: "Cristioan Redin",
            age: 25,
            birthday: new Date('2000-02-06')
        },

    ]

    getCustomers(): Customers[] {
        return this.customers;
    }

    getCustomersById(id: number): Customers| undefined{
        return this.customers.find((item: Customers) => item.id == id);
    }

    private lastId(): number{
        return this.customers[this.customers.length -1].id
    }


    insert(body:any){
        this.customers = [
            ...this.customers,
            {
                id: this.lastId() ,
                name: body.name,
                age: body.age,
                birthday: body.birthday
            }
        ] 
        
    }

    update(id: number, body: any){
        let customers: Customers = {
            id,
            name: body.name,
            age: body.age,
            birthday: body.birthday,
        }
        this.customers = this.customers.map( (item: Customers) => {
            console.log(item, id, item.id == id);
            return item.id == id? customers : item;
        })
    }

    delete(id: number) {
        this.customers = this.customers.filter( (item: Customers) =>{})
    }
}
