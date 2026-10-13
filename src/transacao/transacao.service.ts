import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTransacaoDto } from './dto/create-transacao.dto';
import { UpdateTransacaoDto } from './dto/update-transacao.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Decimal } from '@prisma/client/runtime/library';

@Injectable()
export class TransacaoService {
  constructor(private prisma: PrismaService){}
  create(createTransacaoDto: CreateTransacaoDto) {
    const {valor, data} = createTransacaoDto;

    if(data.getHours >= 0 && data.getHours <= 5){
      createTransacaoDto.nivelRisco = 'LEVE'
    }
    
    if(valor > Decimal(100000.0))
      createTransacaoDto.nivelRisco = 'ALTO';

    return this.prisma.transacao.create({data: createTransacaoDto});
  }

  findAll() {
    return this.prisma.transacao.findMany();
  }

  async findOne(id: number) {
    const transacao = await this.prisma.transacao.findUnique({where:{id}});
    if(!transacao) throw new NotFoundException('Transacao nao encontrada')
  }

  update(id: number, updateTransacaoDto: UpdateTransacaoDto) {
    return this.prisma.transacao.update({where:{id}, data: updateTransacaoDto});
  }

  remove(id: number) {
    return this.prisma.transacao.delete({where:{id}});
  }
}
