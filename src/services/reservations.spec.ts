import { Test, TestingModule } from '@nestjs/testing';
import { ReservationsService } from './reservations.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Reservation } from '../models/reservation.entity';

describe('ReservationsService', () => {
  let service: ReservationsService;

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
        ReservationsService,
        {
          provide: getRepositoryToken(Reservation),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ReservationsService>(ReservationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of reservations', async () => {
    const reservations = [
      { id: 1, roomNumber: 101, guestName: 'John Doe' },
      { id: 2, roomNumber: 102, guestName: 'Jane Doe' },
    ];
    mockRepository.find.mockReturnValue(reservations);

    const result = await service.findAll();
    expect(result).toEqual(reservations);
  });
});
