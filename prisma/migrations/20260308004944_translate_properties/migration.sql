/*
  Warnings:

  - You are about to drop the column `created_at` on the `cargos` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `concursos` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `concursos` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `notas` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `notas` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `usuarios` table. All the data in the column will be lost.
  - Added the required column `atualizado_em` to the `concursos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `atualizado_em` to the `notas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cargos" DROP COLUMN "created_at",
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "concursos" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "notas" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "atualizado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
