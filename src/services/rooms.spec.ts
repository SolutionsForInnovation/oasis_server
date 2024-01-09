import { Test, TestingModule } from '@nestjs/testing';
import { RoomsService } from './rooms.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Room } from '../models/room.entity';

describe('RoomsService', () => {
  let service: RoomsService;

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
        RoomsService,
        {
          provide: getRepositoryToken(Room),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<RoomsService>(RoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of rooms', async () => {
    const rooms = [
      { id: 1, name: 'Room 1' },
      { id: 2, name: 'Room 2' },
    ];
    mockRepository.find.mockReturnValue(rooms);

    const result = await service.findAll();
    expect(result).toEqual(rooms);
  });
});
