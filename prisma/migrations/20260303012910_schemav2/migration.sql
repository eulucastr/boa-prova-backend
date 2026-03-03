/*
  Warnings:

  - You are about to drop the column `concursoId` on the `cargos` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `cargos` table. All the data in the column will be lost.
  - You are about to drop the column `totalVagas` on the `cargos` table. All the data in the column will be lost.
  - You are about to drop the column `vagasAmpla` on the `cargos` table. All the data in the column will be lost.
  - You are about to drop the column `vagasCotas` on the `cargos` table. All the data in the column will be lost.
  - You are about to drop the column `ativo` on the `concursos` table. All the data in the column will be lost.
  - You are about to drop the column `banca` on the `concursos` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `concursos` table. All the data in the column will be lost.
  - You are about to drop the column `dataProva` on the `concursos` table. All the data in the column will be lost.
  - You are about to drop the column `linkEdital` on the `concursos` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `concursos` table. All the data in the column will be lost.
  - You are about to drop the column `cargoId` on the `notas` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `notas` table. All the data in the column will be lost.
  - You are about to drop the column `tipoCota` on the `notas` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `notas` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `notas` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `notas` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `senhaHash` on the `usuarios` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[usuario_id,cargo_id]` on the table `notas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cidade` to the `cargos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `concurso_id` to the `cargos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `cargos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `regiao` to the `cargos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vagas_cotas` to the `cargos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `banca_id` to the `concursos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orgao` to the `concursos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `concursos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cargo_id` to the `notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cota` to the `notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inscricao_id` to the `notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario_id` to the `notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `versao_prova` to the `notas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha_hash` to the `usuarios` table without a default value. This is not possible if the table is not empty.
  - Made the column `nome` on table `usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Fase" AS ENUM ('INSCRICOES', 'GABARITO_EXTRAOFICIAL', 'GABARITO_PRELIMINAR', 'GABARITO_DEFINITIVO', 'RESULTADO');

-- CreateEnum
CREATE TYPE "Participacao" AS ENUM ('OFICIAL', 'SIMULADO');

-- DropForeignKey
ALTER TABLE "cargos" DROP CONSTRAINT "cargos_concursoId_fkey";

-- DropForeignKey
ALTER TABLE "notas" DROP CONSTRAINT "notas_cargoId_fkey";

-- DropForeignKey
ALTER TABLE "notas" DROP CONSTRAINT "notas_usuarioId_fkey";

-- DropIndex
DROP INDEX "notas_usuarioId_cargoId_key";

-- AlterTable
ALTER TABLE "cargos" DROP COLUMN "concursoId",
DROP COLUMN "createdAt",
DROP COLUMN "totalVagas",
DROP COLUMN "vagasAmpla",
DROP COLUMN "vagasCotas",
ADD COLUMN     "cidade" TEXT NOT NULL,
ADD COLUMN     "concurso_id" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "estado" TEXT NOT NULL,
ADD COLUMN     "materias" JSONB[],
ADD COLUMN     "regiao" TEXT NOT NULL,
ADD COLUMN     "total_vagas" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "vagas_cotas" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "concursos" DROP COLUMN "ativo",
DROP COLUMN "banca",
DROP COLUMN "createdAt",
DROP COLUMN "dataProva",
DROP COLUMN "linkEdital",
DROP COLUMN "updatedAt",
ADD COLUMN     "banca_id" TEXT NOT NULL,
ADD COLUMN     "cotas" TEXT[],
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "data_gabarito" TIMESTAMP(3),
ADD COLUMN     "data_inscricao" TIMESTAMP(3),
ADD COLUMN     "data_prova" TIMESTAMP(3),
ADD COLUMN     "data_publicacao" TIMESTAMP(3),
ADD COLUMN     "data_resultado" TIMESTAMP(3),
ADD COLUMN     "fase" "Fase" NOT NULL DEFAULT 'INSCRICOES',
ADD COLUMN     "link_edital" TEXT,
ADD COLUMN     "link_pagina" TEXT,
ADD COLUMN     "orgao" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "versoes_prova" TEXT[];

-- AlterTable
ALTER TABLE "notas" DROP COLUMN "cargoId",
DROP COLUMN "createdAt",
DROP COLUMN "tipoCota",
DROP COLUMN "updatedAt",
DROP COLUMN "usuarioId",
DROP COLUMN "valor",
ADD COLUMN     "cargo_id" TEXT NOT NULL,
ADD COLUMN     "cota" TEXT NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "inscricao_id" TEXT NOT NULL,
ADD COLUMN     "participacao" "Participacao" NOT NULL DEFAULT 'OFICIAL',
ADD COLUMN     "respostas" TEXT[],
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "usuario_id" TEXT NOT NULL,
ADD COLUMN     "versao_prova" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "createdAt",
DROP COLUMN "senhaHash",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "senha_hash" TEXT NOT NULL,
ALTER COLUMN "nome" SET NOT NULL;

-- DropEnum
DROP TYPE "TipoCota";

-- CreateTable
CREATE TABLE "bancas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "imagem" TEXT,

    CONSTRAINT "bancas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "notas_usuario_id_cargo_id_key" ON "notas"("usuario_id", "cargo_id");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_nome_key" ON "usuarios"("nome");

-- AddForeignKey
ALTER TABLE "concursos" ADD CONSTRAINT "concursos_banca_id_fkey" FOREIGN KEY ("banca_id") REFERENCES "bancas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargos" ADD CONSTRAINT "cargos_concurso_id_fkey" FOREIGN KEY ("concurso_id") REFERENCES "concursos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notas" ADD CONSTRAINT "notas_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notas" ADD CONSTRAINT "notas_cargo_id_fkey" FOREIGN KEY ("cargo_id") REFERENCES "cargos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
