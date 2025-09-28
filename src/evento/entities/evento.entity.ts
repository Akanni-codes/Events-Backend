import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

@Entity({ name: 'tb_eventos' })
export class Evento {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @UpdateDateColumn()
  data: Date;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  endereco: string;

  @Column({ length: 5000, nullable: false })
  descricao: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.evento)
  usuario: Usuario;
}
