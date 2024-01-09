import { Test, TestingModule } from '@nestjs/testing';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from '../services/reservations.service';
import { Reservation } from '../models/reservation.entity';
import { MOCK_RESERVATION_1, MOCK_RESERVATION_2 } from '../mocks/reservations';

describe('ReservationsController', () => {
  let controller: ReservationsController;
  let service: ReservationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationsController],
      providers: [
        {
          provide: ReservationsService,
          useValue: {
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ReservationsController>(ReservationsController);
    service = module.get<ReservationsService>(ReservationsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of reservations', async () => {
    const reservations: Reservation[] = [
      MOCK_RESERVATION_1,
      MOCK_RESERVATION_2,
    ];
    jest.spyOn(service, 'findAll').mockResolvedValue(reservations);

    const result = await controller.findAll();
    expect(result).toEqual(reservations);
  });
});
