import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseFilters,
} from '@nestjs/common';
import { GuestsService } from '../services/guests.service';
import { Guest } from '../models/guest.entity';
import { HttpExceptionFilter } from '../filters/http-exception.filter';

@Controller('guests')
@UseFilters(HttpExceptionFilter)
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get()
  async findAll(): Promise<Guest[]> {
    return this.guestsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Guest> {
    return this.guestsService.findOne(id);
  }

  @Post()
  async create(@Body() guestData: Partial<Guest>): Promise<Guest> {
    return this.guestsService.create(guestData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() guestData: Partial<Guest>,
  ): Promise<Guest> {
    return this.guestsService.update(id, guestData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.guestsService.remove(id);
  }
}
