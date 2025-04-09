import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product/product.interface';

@Injectable()
export class ProductsService {
    private products : Product[] = [
        {
            id:0,
            name: "marco de fotos pequeño",
            description: "Marco ideal para fotos 15x15"
        },{
            id:1,
            name: "marco de fotos mediano",
            description: "Marco ideal para fotos 25X25"
        },{ 
            id:2,
            name: "marco de fotos grande",
            description: "Marco ideal para fotos 35x25"
        },{
            id:3,
            name: "marco de fotos granades",
            description: "Marco ideal para fotos 45x35"
        },{
            id:4,
            name:"marco semi grande",
            description:"muy largo"
        }
    ];
    getAll(){
        return this.products;
    }
    
        insert(products: Product){
            this.products=[
                ...this.products,
                products
            ];
        }
    

    
}
