-- CreateEnum
CREATE TYPE "TipoCota" AS ENUM ('AMPLA', 'NEGROS', 'PCD', 'INDIGENA');

-- CreateTable
CREATE TABLE "concursos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "banca" TEXT NOT NULL,
    "dataProva" TIMESTAMP(3),
    "linkEdital" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "concursos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cargos" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "vagasAmpla" INTEGER NOT NULL DEFAULT 0,
    "vagasCotas" INTEGER NOT NULL DEFAULT 0,
    "totalVagas" INTEGER NOT NULL DEFAULT 0,
    "concursoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cargos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT,
    "senhaHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notas" (
    "id" TEXT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "tipoCota" "TipoCota" NOT NULL DEFAULT 'AMPLA',
    "usuarioId" TEXT NOT NULL,
    "cargoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "notas_usuarioId_cargoId_key" ON "notas"("usuarioId", "cargoId");

-- AddForeignKey
ALTER TABLE "cargos" ADD CONSTRAINT "cargos_concursoId_fkey" FOREIGN KEY ("concursoId") REFERENCES "concursos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notas" ADD CONSTRAINT "notas_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notas" ADD CONSTRAINT "notas_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
