-- CreateEnum
CREATE TYPE "Fase" AS ENUM ('INSCRICOES', 'GABARITO_EXTRAOFICIAL', 'GABARITO_PRELIMINAR', 'GABARITO_DEFINITIVO', 'RESULTADO');

-- CreateEnum
CREATE TYPE "Participacao" AS ENUM ('OFICIAL', 'SIMULADO');

-- CreateTable
CREATE TABLE "concursos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "data_publicacao" TIMESTAMP(3),
    "data_inscricao" TIMESTAMP(3),
    "data_prova" TIMESTAMP(3),
    "data_gabarito" TIMESTAMP(3),
    "data_resultado" TIMESTAMP(3),
    "link_edital" TEXT,
    "link_pagina" TEXT,
    "orgao" TEXT NOT NULL,
    "fase" "Fase" NOT NULL DEFAULT 'INSCRICOES',
    "banca_id" TEXT NOT NULL,
    "cotas" TEXT[],
    "versoes_prova" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "concursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cargos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "total_vagas" INTEGER NOT NULL DEFAULT 0,
    "vagas_cotas" JSONB NOT NULL,
    "concurso_id" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "regiao" TEXT NOT NULL,
    "materias" JSONB[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cargos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha_hash" TEXT,
    "oauth_provider" TEXT,
    "oauth_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notas" (
    "id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "cota" TEXT NOT NULL,
    "respostas" TEXT[],
    "inscricao_id" TEXT NOT NULL,
    "participacao" "Participacao" NOT NULL DEFAULT 'OFICIAL',
    "versao_prova" TEXT NOT NULL,
    "cargo_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bancas" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "imagem" TEXT,

    CONSTRAINT "bancas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_nome_key" ON "usuarios"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_oauth_provider_oauth_id_key" ON "usuarios"("oauth_provider", "oauth_id");

-- CreateIndex
CREATE UNIQUE INDEX "notas_usuario_id_cargo_id_key" ON "notas"("usuario_id", "cargo_id");

-- AddForeignKey
ALTER TABLE "concursos" ADD CONSTRAINT "concursos_banca_id_fkey" FOREIGN KEY ("banca_id") REFERENCES "bancas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cargos" ADD CONSTRAINT "cargos_concurso_id_fkey" FOREIGN KEY ("concurso_id") REFERENCES "concursos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notas" ADD CONSTRAINT "notas_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notas" ADD CONSTRAINT "notas_cargo_id_fkey" FOREIGN KEY ("cargo_id") REFERENCES "cargos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
