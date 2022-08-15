/*
  Warnings:

  - Made the column `lastChatContent` on table `chatroom` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastChatDate` on table `chatroom` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `chatroom` MODIFY `lastChatContent` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `lastChatDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
