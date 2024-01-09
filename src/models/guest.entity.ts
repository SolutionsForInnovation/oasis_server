import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Guest {
  @PrimaryGeneratedColumn()
  guest_id: number;

  @Column()
  full_name: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}
