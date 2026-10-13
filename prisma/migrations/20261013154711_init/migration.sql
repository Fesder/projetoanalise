-- CreateEnum
CREATE TYPE "tipoTransacao" AS ENUM ('CREDITO', 'DEBITO');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('APROVADA', 'REPROVADA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "nivelRisco" AS ENUM ('ALTO', 'MEDIO', 'LEVE');

-- CreateTable
CREATE TABLE "Transacao" (
    "id" SERIAL NOT NULL,
    "client_id" INTEGER NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo_transacao" "tipoTransacao" NOT NULL,
    "parcela" DECIMAL(65,30) NOT NULL,
    "taxa" DECIMAL(65,30) NOT NULL,
    "valor_liquido" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "status" "status" NOT NULL,
    "nivelRisco" "nivelRisco" NOT NULL,

    CONSTRAINT "Transacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "nome_fantasia" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_cnpj_key" ON "Client"("cnpj");

-- AddForeignKey
ALTER TABLE "Transacao" ADD CONSTRAINT "Transacao_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
