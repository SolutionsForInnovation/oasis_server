import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from '../models/reservation.entity';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ) {}

  async findAll(): Promise<Reservation[]> {
    return this.reservationRepository.find();
  }

  async findOne(id: number): Promise<Reservation> {
    return this.reservationRepository.findOne({
      where: { reservation_id: id },
    });
  }

  async create(reservationData: Partial<Reservation>): Promise<Reservation> {
    const newReservation = this.reservationRepository.create(reservationData);
    return this.reservationRepository.save(newReservation);
  }

  async update(
    id: number,
    reservationData: Partial<Reservation>,
  ): Promise<Reservation> {
    await this.reservationRepository.update(id, reservationData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.reservationRepository.delete(id);
  }
}
