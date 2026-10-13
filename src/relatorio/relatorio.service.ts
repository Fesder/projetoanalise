import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RelatorioService {
  constructor(private prisma: PrismaService){}

  async relatorio(id: number) {
      const client = await this.prisma.client.findUnique({where:{id}, include:{transacoes:true}});
      if(!client) throw new NotFoundException('Cliente nao encontrado');
      const total = client.transacoes.length
      if(client.transacoes.map(t => t.nivelRisco)) 
      return client;
    }
}
