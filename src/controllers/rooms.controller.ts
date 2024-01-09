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
import { RoomsService } from '../services/rooms.service';
import { Room } from '../models/room.entity';
import { HttpExceptionFilter } from '../filters/http-exception.filter';

@Controller('rooms')
@UseFilters(HttpExceptionFilter)
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Get()
  async findAll(): Promise<Room[]> {
    return this.roomsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Room> {
    return this.roomsService.findOne(id);
  }

  @Post()
  async create(@Body() roomData: Partial<Room>): Promise<Room> {
    return this.roomsService.create(roomData);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() roomData: Partial<Room>,
  ): Promise<Room> {
    return this.roomsService.update(id, roomData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.roomsService.remove(id);
  }
}
