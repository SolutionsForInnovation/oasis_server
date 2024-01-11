import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseFilters, Patch, BadRequestException,
} from '@nestjs/common';
import { ReservationsService } from '../services/reservations.service';
import { Reservation } from '../models/reservation.entity';
import { HttpExceptionFilter } from '../filters/http-exception.filter';

@Controller('reservations')
@UseFilters(HttpExceptionFilter)
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

  @Patch(':id/check-in-out')
  async checkInOut(
    @Param('id') id: number,
    @Body('isCheckedIn') isCheckedIn: boolean,
  ): Promise<Reservation> {
    if (isCheckedIn === undefined || typeof isCheckedIn !== 'boolean') {
      throw new BadRequestException('Invalid check-in/out status');
    }

    return this.reservationsService.checkInOut(id, isCheckedIn);
  }
}
