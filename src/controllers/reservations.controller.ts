import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ReservationsService } from '../services/reservations.service';
import { Reservation } from '../models/reservation.entity';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Get()
  async findAll(): Promise<Reservation[]> {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Reservation> {
    return this.reservationsService.findOne(id);
  }

  @Post()
  async create(
    @Body() reservationData: Partial<Reservation>,
  ): Promise<Reservation> {
    return this.reservationsService.create(reservationData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() reservationData: Partial<Reservation>,
  ): Promise<Reservation> {
    return this.reservationsService.update(id, reservationData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.reservationsService.remove(id);
  }
}
