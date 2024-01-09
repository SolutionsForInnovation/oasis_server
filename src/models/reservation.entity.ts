import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Room } from './room.entity';
import { Guest } from './guest.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  reservation_id: number;

  @ManyToOne(() => Room, { eager: true })
  @JoinColumn({ name: 'room_id' })
  room: Room;

  @ManyToOne(() => Guest, { eager: true })
  @JoinColumn({ name: 'guest_id' })
  guest: Guest;

  @Column({ type: 'date' })
  check_in_date: Date;

  @Column({ type: 'date' })
  check_out_date: Date;

  @Column('decimal', { precision: 10, scale: 2 })
  total_cost: number;
}
