import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { EventoService } from '../services/evento.service';
import { Evento } from '../entities/evento.entity';

@Controller('/eventos')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Evento[]> {
    return this.eventoService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Evento> {
    return this.eventoService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByNome(@Param('nome') nome: string): Promise<Evento[]> {
    return this.eventoService.findAllByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() evento: Evento): Promise<Evento> {
    return this.eventoService.create(evento);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() evento: Evento): Promise<Evento> {
    return this.eventoService.update(evento);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.eventoService.delete(id);
  }
}
