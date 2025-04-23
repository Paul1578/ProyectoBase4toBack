import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entity/products.entity';
import { CreateProductsDto } from './dto/products.dto/products.dto';
import { UpdateProductsDto } from './dto/updateProduct.dto';


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Obtener todos los productos
  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  // Obtener un producto por ID
  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Producto con ID: ${id} no encontrado`);
    }
    return product;
  }

  // Crear un nuevo producto
  async create(createProductDto: CreateProductsDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

  // Actualizar un producto por ID
  async update(id: number, updateProductDto: UpdateProductsDto): Promise<Product> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Producto con ID: ${id} no encontrado`);
    }

    Object.assign(product, updateProductDto);
    return await this.productRepository.save(product);
  }

  // Eliminar un producto por ID
  async remove(id: number): Promise<void> {
    const product = await this.productRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Producto con ID: ${id} no encontrado`);
    }

    await this.productRepository.remove(product);
  }
}
