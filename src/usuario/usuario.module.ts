import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from './controllers/usuario.controller';
import { EventoModule } from '../evento/evento.module';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]), EventoModule],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [],
})
export class UsuarioModule {}
