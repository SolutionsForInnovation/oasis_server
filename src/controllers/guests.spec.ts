import { Test, TestingModule } from '@nestjs/testing';
import { GuestsController } from './guests.controller';
import { GuestsService } from '../services/guests.service';
import { Guest } from '../models/guest.entity';
import { MOCK_GUEST_1, MOCK_GUEST_2 } from '../mocks/guests';

describe('GuestsController', () => {
  let controller: GuestsController;
  let service: GuestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuestsController],
      providers: [
        {
          provide: GuestsService,
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

    controller = module.get<GuestsController>(GuestsController);
    service = module.get<GuestsService>(GuestsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of guests', async () => {
    const guests: Guest[] = [MOCK_GUEST_1, MOCK_GUEST_2];
    jest.spyOn(service, 'findAll').mockResolvedValue(guests);

    const result = await controller.findAll();
    expect(result).toEqual(guests);
  });
});
