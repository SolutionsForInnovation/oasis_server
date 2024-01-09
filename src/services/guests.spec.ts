import { Test, TestingModule } from '@nestjs/testing';
import { GuestsService } from './guests.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Guest } from '../models/guest.entity';

describe('GuestsService', () => {
  let service: GuestsService;

  const mockRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GuestsService,
        {
          provide: getRepositoryToken(Guest),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<GuestsService>(GuestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of guests', async () => {
    const guests = [
      { id: 1, name: 'Guest 1' },
      { id: 2, name: 'Guest 2' },
    ];
    mockRepository.find.mockReturnValue(guests);

    const result = await service.findAll();
    expect(result).toEqual(guests);
  });
});
