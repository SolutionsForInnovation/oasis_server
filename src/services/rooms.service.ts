import { Injectable } from '@nestjs/common';
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
    return this.roomRepository.find();
  }

  async findOne(id: number): Promise<Room> {
    return this.roomRepository.findOne({ where: { room_id: id } });
  }

  async create(roomData: Partial<Room>): Promise<Room> {
    const newRoom = this.roomRepository.create(roomData);
    return this.roomRepository.save(newRoom);
  }

  async update(id: number, roomData: Partial<Room>): Promise<Room> {
    await this.roomRepository.update(id, roomData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.roomRepository.delete(id);
  }
}
