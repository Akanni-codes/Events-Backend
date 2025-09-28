import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../entities/usuario.entity';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { EventoService } from '../../evento/services/evento.service';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private evetoService: EventoService,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      relations: {
        evento: true,
      },
    });
  }

  async findById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        id,
      },
      relations: {
        evento: true,
      },
    });
    if (!usuario) {
      throw new HttpException('Usuario Não Encontrado', HttpStatus.NOT_FOUND);
    }
    return usuario;
  }

  async findByNome(nome: string): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        evento: true,
      },
    });
  }

  async create(usuario: Usuario): Promise<Usuario> {
    return await this.usuarioRepository.save(usuario);
  }

  async update(usuario: Usuario): Promise<Usuario> {
    await this.findById(usuario.id);

    return await this.usuarioRepository.save(usuario);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.usuarioRepository.delete(id);
  }

  async participar(usuario: Usuario): Promise<Usuario> {
    await this.evetoService.findById(usuario.evento.id);
    return await this.usuarioRepository.save(usuario);
  }
}
