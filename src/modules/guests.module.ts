import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestsController } from '../controllers/guests.controller';
import { GuestsService } from '../services/guests.service';
import { Guest } from '../models/guest.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Guest])],
  controllers: [GuestsController],
  providers: [GuestsService],
})
export class GuestsModule {}
