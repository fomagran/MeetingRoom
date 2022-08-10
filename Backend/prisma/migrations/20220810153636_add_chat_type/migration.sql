-- DropIndex
DROP INDEX `ChatRoom_chatId_fkey` ON `chatroom`;

-- AlterTable
ALTER TABLE `chat` ADD COLUMN `type` ENUM('WELCOME', 'MESSAGE', 'LEAVE') NOT NULL DEFAULT 'MESSAGE';
