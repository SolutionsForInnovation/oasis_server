import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    try {
      return this.reservationRepository.find();
    } catch (e) {
      throw new NotFoundException('Failed to retrieve reservations');
    }
  }

  async findOne(id: number): Promise<Reservation> {
    try {
      return this.reservationRepository.findOne({
        where: { reservation_id: id },
      });
    } catch (e) {
      throw new NotFoundException('Failed to retrieve reservation');
    }
  }

  async create(reservationData: Partial<Reservation>): Promise<Reservation> {
    try {
      const newReservation = this.reservationRepository.create(reservationData);
      return this.reservationRepository.save(newReservation);
    } catch (e) {
      throw new BadRequestException('Failed to create reservation');
    }
  }

  async update(
    id: number,
    reservationData: Partial<Reservation>,
  ): Promise<Reservation> {
    try {
      await this.reservationRepository.update(id, reservationData);
      return this.findOne(id);
    } catch (e) {
      throw new BadRequestException('Failed to update reservation');
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.reservationRepository.delete(id);
    } catch (e) {
      throw new BadRequestException('Failed to remove reservation');
    }
  }
}
