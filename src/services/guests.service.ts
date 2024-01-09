import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Guest } from '../models/guest.entity';

@Injectable()
export class GuestsService {
  constructor(
    @InjectRepository(Guest)
    private readonly guestRepository: Repository<Guest>,
  ) {}

  async findAll(): Promise<Guest[]> {
    try {
      return this.guestRepository.find();
    } catch (e) {
      throw new NotFoundException('Failed to retrieve guests');
    }
  }

  async findOne(id: number): Promise<Guest | undefined> {
    try {
      return this.guestRepository.findOne({ where: { guest_id: id } });
    } catch (e) {
      throw new NotFoundException('Failed to retrieve guest');
    }
  }

  async create(guestData: Partial<Guest>): Promise<Guest> {
    try {
      const newGuest = this.guestRepository.create(guestData);
      return this.guestRepository.save(newGuest);
    } catch (e) {
      throw new BadRequestException('Failed to create guest');
    }
  }

  async update(id: number, guestData: Partial<Guest>): Promise<Guest> {
    try {
      await this.guestRepository.update(id, guestData);
      return this.findOne(id);
    } catch (e) {
      throw new BadRequestException('Failed to update guest');
    }
  }

  async remove(id: number): Promise<void> {
    try {
      await this.guestRepository.delete(id);
    } catch (e) {
      throw new BadRequestException('Failed to remove guest');
    }
  }
}
