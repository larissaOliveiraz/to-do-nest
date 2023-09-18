/*
  Warnings:

  - You are about to drop the `tasks_users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tasks_users" DROP CONSTRAINT "tasks_users_task_id_fkey";

-- DropForeignKey
ALTER TABLE "tasks_users" DROP CONSTRAINT "tasks_users_user_id_fkey";

-- AlterTable
ALTER TABLE "tasks" ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "tasks_users";

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
