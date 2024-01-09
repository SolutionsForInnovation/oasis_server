import { Reservation } from '../models/reservation.entity';
import { MOCK_GUEST_1, MOCK_GUEST_2 } from './guests';
import { MOCK_ROOM_1, MOCK_ROOM_2 } from './rooms';

const MOCK_RESERVATION_1: Reservation = {
  reservation_id: 1,
  room: MOCK_ROOM_1,
  guest: MOCK_GUEST_1,
  check_in_date: new Date(),
  check_out_date: new Date(),
  total_cost: 80,
} as const;

const MOCK_RESERVATION_2: Reservation = {
  reservation_id: 1,
  room: MOCK_ROOM_2,
  guest: MOCK_GUEST_2,
  check_in_date: new Date(),
  check_out_date: new Date(),
  total_cost: 80,
} as const;

export { MOCK_RESERVATION_1, MOCK_RESERVATION_2 };
