import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService){}
  create(createClientDto: CreateClientDto) {
    return this.prisma.client.create({data: createClientDto});
  }

  findAll() {
    return this.prisma.client.findMany({include:{transacoes:true}});
  }

  async findOne(id: number) {
    const client = await this.prisma.client.findUnique({where:{id}});
    if(!client) throw new NotFoundException('Cliente nao encontrado');
    return client;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.prisma.client.update({where:{id}, data: updateClientDto});
  }

  remove(id: number) {
    return this.prisma.client.delete({where:{id}});
  }
}
