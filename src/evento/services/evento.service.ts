import { Evento } from './../entities/evento.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { DeleteResult } from 'typeorm/browser';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento)
    private eventoRepository: Repository<Evento>,
  ) {}

  async findAll(): Promise<Evento[]> {
    return await this.eventoRepository.find();
  }

  async findById(id: number): Promise<Evento> {
    const evento = await this.eventoRepository.findOne({
      where: {
        id,
      },
    });

    if (!evento) {
      throw new HttpException('Evento não encontado', HttpStatus.NOT_FOUND);
    }
    return evento;
  }

  async findAllByNome(nome: string): Promise<Evento[]> {
    return await this.eventoRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
    });
  }

  async create(evento: Evento): Promise<Evento> {
    return await this.eventoRepository.save(evento);
  }

  async update(evento: Evento): Promise<Evento> {
    await this.findById(evento.id);
    return await this.eventoRepository.save(evento);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.eventoRepository.delete(id);
  }
}
