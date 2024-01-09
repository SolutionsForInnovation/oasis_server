import { Test, TestingModule } from '@nestjs/testing';
import { RoomsController } from './rooms.controller';
import { RoomsService } from '../services/rooms.service';
import { Room } from '../models/room.entity';
import { MOCK_ROOM_1, MOCK_ROOM_2 } from '../mocks/rooms';

describe('RoomsController', () => {
  let controller: RoomsController;
  let service: RoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomsController],
      providers: [
        {
          provide: RoomsService,
          useValue: {
            // Mock or stub service methods as needed
            findAll: jest.fn(),
            findOne: jest.fn(),
            create: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<RoomsController>(RoomsController);
    service = module.get<RoomsService>(RoomsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of rooms', async () => {
    const rooms: Room[] = [MOCK_ROOM_1, MOCK_ROOM_2];
    jest.spyOn(service, 'findAll').mockResolvedValue(rooms);

    const result = await controller.findAll();
    expect(result).toEqual(rooms);
  });
});
