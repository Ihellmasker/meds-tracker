-- CreateTable
CREATE TABLE "Med" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "pillsLeft" INTEGER NOT NULL,
    "dailyDose" INTEGER NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
