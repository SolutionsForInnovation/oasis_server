import { Guest } from '../models/guest.entity';

const MOCK_GUEST_1: Guest = {
  guest_id: 1,
  full_name: 'Guest 1',
  email: 'mock1@test.com',
  phone: '+1 456 9602 123',
} as const;

const MOCK_GUEST_2: Guest = {
  guest_id: 2,
  full_name: 'Guest 2',
  email: 'mock2@test.com',
  phone: '+1 123 4567 987',
} as const;

export { MOCK_GUEST_1, MOCK_GUEST_2 };
