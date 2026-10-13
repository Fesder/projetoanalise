import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { RelatorioService } from './relatorio.service';

@Controller('relatorio')
export class RelatorioController {
  constructor(private readonly relatorioService: RelatorioService) {}

  @Get(':id')
    relatorio(@Param('id', ParseIntPipe) id: number) {
      return this.relatorioService.relatorio(id);
    }
}
