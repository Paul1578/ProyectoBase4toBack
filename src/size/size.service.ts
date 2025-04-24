import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SizeEntity } from './entities/size.entity';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';

@Injectable()
export class SizeService {
  constructor(
    @InjectRepository(SizeEntity)
    private readonly sizeRepository: Repository<SizeEntity>,
  ) {}

  async create(createSizeDto: CreateSizeDto): Promise<SizeEntity> {
    const size = this.sizeRepository.create(createSizeDto);
    return await this.sizeRepository.save(size);
  }

  async findAll(): Promise<SizeEntity[]> {
    return await this.sizeRepository.find();
  }

  async findOne(id: number): Promise<SizeEntity> {
    return await this.sizeRepository.findOneOrFail({ where: { id } });
  }

  async update(id: number, updateSizeDto: UpdateSizeDto): Promise<SizeEntity> {
    await this.sizeRepository.update(id, updateSizeDto);
    return await this.sizeRepository.findOneOrFail({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.sizeRepository.delete(id);
  }
}