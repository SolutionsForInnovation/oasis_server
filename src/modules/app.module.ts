import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

import { RoomsService } from '../services/rooms.service';
import { GuestsService } from '../services/guests.service';
import { ReservationsService } from '../services/reservations.service';
import { RoomsModule } from './rooms.module';
import { ReservationsModule } from './reservations.module';
import { GuestsModule } from './guests.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from '../models/room.entity';
import { Guest } from '../models/guest.entity';
import { Reservation } from '../models/reservation.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      /* Your database connection configuration */
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'hotel_user',
      password: 'password',
      database: 'oasis_hotel',
      entities: [Room, Guest, Reservation],
      synchronize: true, // For development only, set to false for production
    }),
    TypeOrmModule.forFeature([Room, Guest, Reservation]),
    RoomsModule,
    GuestsModule,
    ReservationsModule,
  ],
  controllers: [AppController],
  providers: [AppService, RoomsService, GuestsService, ReservationsService],
})
export class AppModule {}
