-- AlterTable: Make senha_hash optional and add OAuth fields
ALTER TABLE "usuarios" ALTER COLUMN "senha_hash" DROP NOT NULL;

-- AddColumn
ALTER TABLE "usuarios" ADD COLUMN "oauth_provider" TEXT;

-- AddColumn
ALTER TABLE "usuarios" ADD COLUMN "oauth_id" TEXT;

-- AddColumn
ALTER TABLE "usuarios" ADD COLUMN "avatar_url" TEXT;

-- AddColumn
ALTER TABLE "usuarios" ADD COLUMN "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_oauth_provider_oauth_id_key" ON "usuarios"("oauth_provider", "oauth_id");
