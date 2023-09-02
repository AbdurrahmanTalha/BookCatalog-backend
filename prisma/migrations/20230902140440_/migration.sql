/*
  Warnings:

  - You are about to drop the column `publicationDate` on the `books` table. All the data in the column will be lost.
  - Added the required column `date` to the `books` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "publicationDate",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;
