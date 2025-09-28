import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './entities/evento.entity';
import { EventoService } from './services/evento.service';
import { EventoController } from './controllers/evento.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Evento])],
  providers: [EventoService],
  controllers: [EventoController],
  exports: [],
})
export class EventoModule {}
