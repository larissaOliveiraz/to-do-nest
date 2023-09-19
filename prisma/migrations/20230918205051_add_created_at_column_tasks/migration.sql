/*
  Warnings:

  - You are about to drop the column `end_at` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `start_at` on the `tasks` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "end_at",
DROP COLUMN "start_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
