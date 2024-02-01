-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "FullName" TEXT NOT NULL,
    "Position" TEXT NOT NULL,
    "CompanyName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Internship" BOOLEAN DEFAULT false,
    "EntryLevel" BOOLEAN DEFAULT false,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_Email_key" ON "Student"("Email");
