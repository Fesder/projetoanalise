import { nivelRisco, status, tipoTransacao } from "@prisma/client"
import { Decimal } from "@prisma/client/runtime/library"
import { IsDate, IsDecimal, IsEnum, IsInt, IsNotEmpty } from "class-validator"

export class CreateTransacaoDto {
    
    @IsInt()
    @IsNotEmpty()
    client_id: number
    
    @IsDecimal()
    valor: Decimal

    @IsDate()
    data: Date

    @IsEnum(tipoTransacao)
    tipo_transacao: tipoTransacao

    @IsDecimal()
    parcela: Decimal

    @IsDecimal()
    taxa: Decimal

    @IsDecimal()
    valor_liquido: Decimal

    @IsEnum(status)
    status: status

    @IsEnum(nivelRisco)
    nivelRisco: nivelRisco
}
