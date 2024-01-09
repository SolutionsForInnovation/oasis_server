import { Room } from '../models/room.entity';

const MOCK_ROOM_1: Room = {
  room_id: 1,
  room_number: '101',
  room_type: 'single',
  description: '',
  status: 'available',
  price_per_night: 20,
} as const;

const MOCK_ROOM_2: Room = {
  room_id: 2,
  room_number: '201',
  room_type: 'double',
  description: '',
  status: 'maintenance',
  price_per_night: 30,
} as const;

export { MOCK_ROOM_1, MOCK_ROOM_2 };
