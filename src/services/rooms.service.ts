import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from '../models/room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  async findAll(): Promise<Room[]> {
    try {
      return await this.roomRepository.find();
    } catch (error) {
      throw new NotFoundException('Failed to retrieve rooms');
    }
  }

  async findOne(id: number): Promise<Room> {
    try {
      return this.roomRepository.findOne({ where: { room_id: id } });
    } catch (e) {
      throw new NotFoundException('Failed to retrieve room');
    }
  }

  async create(roomData: Partial<Room>): Promise<Room> {
    try {
      const newRoom = this.roomRepository.create(roomData);
      newRoom.status = 'available';
      newRoom.price_per_night = Number(roomData.price_per_night);
      return this.roomRepository.save(newRoom);
    } catch (e) {
      throw new BadRequestException('Failed to create room');
    }
  }

  async update(id: number, roomData: Partial<Room>): Promise<Room> {
    try {
      await this.roomRepository.update(id, roomData);
      return this.findOne(id);
    } catch (e) {
      throw new BadRequestException('Failed to update rooms');
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.roomRepository.delete(id);
    } catch (e) {
      throw new BadRequestException('Failed to delete room');
    }
  }
}
