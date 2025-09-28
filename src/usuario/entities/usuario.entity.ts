import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Evento } from '../../evento/entities/evento.entity';

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

  @OneToMany(() => Evento, (evento) => evento.usuario)
  evento: Evento;
}
