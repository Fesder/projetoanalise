import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClientModule } from './client/client.module';
import { TransacaoModule } from './transacao/transacao.module';
import { RelatorioModule } from './relatorio/relatorio.module';

@Module({
  imports: [PrismaModule, ClientModule, TransacaoModule, RelatorioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
