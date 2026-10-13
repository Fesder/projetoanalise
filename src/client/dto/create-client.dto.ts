import { IsInt, IsNotEmpty, IsString } from "class-validator"

export class CreateClientDto {
    
    @IsString()
    @IsNotEmpty()
    nome_fantasia: string

    @IsString()
    @IsNotEmpty()
    cnpj: string
}
