import { IsNotEmpty } from 'class-validator';

import { Evento } from '../../evento/entities/evento.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  email: string;

  @IsNotEmpty()
  @Column({ length: 15, nullable: false })
  telefone: string;

  @ManyToMany(() => Evento, (evento) => evento.usuarios, { eager: true })
  @JoinTable() // cria tabela intermediária tb_usuarios_eventos
  eventos: Evento[];
}
