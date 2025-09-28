import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './evento/entities/evento.entity';
import { EventoModule } from './evento/evento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_events',
      entities: [Evento],
      synchronize: true,
    }),
    EventoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
