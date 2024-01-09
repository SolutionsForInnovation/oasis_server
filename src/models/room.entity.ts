import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  room_id: number;

  @Column()
  room_number: string;

  @Column()
  room_type: string;

  @Column()
  status: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price_per_night: number;

  @Column({ type: 'text', nullable: true })
  description: string;
}
