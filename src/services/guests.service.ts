import { Injectable } from '@nestjs/common';
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
    return this.guestRepository.find();
  }

  async findOne(id: number): Promise<Guest | undefined> {
    return this.guestRepository.findOne({ where: { guest_id: id } });
  }

  async create(guestData: Partial<Guest>): Promise<Guest> {
    const newGuest = this.guestRepository.create(guestData);
    return this.guestRepository.save(newGuest);
  }

  async update(id: number, guestData: Partial<Guest>): Promise<Guest> {
    await this.guestRepository.update(id, guestData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.guestRepository.delete(id);
  }
}
