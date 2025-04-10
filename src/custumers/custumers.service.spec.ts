import { Test, TestingModule } from '@nestjs/testing';
import { CustumersService } from './custumers.service';

describe('CustumersService', () => {
  let service: CustumersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustumersService],
    }).compile();

    service = module.get<CustumersService>(CustumersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
