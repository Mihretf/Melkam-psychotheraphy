/*
  Warnings:

  - You are about to drop the `Specialzation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TherapistProfile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_SpecialzationToTherapistProfile` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."TherapistProfile" DROP CONSTRAINT "TherapistProfile_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."_SpecialzationToTherapistProfile" DROP CONSTRAINT "_SpecialzationToTherapistProfile_A_fkey";

-- DropForeignKey
ALTER TABLE "public"."_SpecialzationToTherapistProfile" DROP CONSTRAINT "_SpecialzationToTherapistProfile_B_fkey";

-- DropTable
DROP TABLE "public"."Specialzation";

-- DropTable
DROP TABLE "public"."TherapistProfile";

-- DropTable
DROP TABLE "public"."User";

-- DropTable
DROP TABLE "public"."_SpecialzationToTherapistProfile";

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "public"."Role" NOT NULL DEFAULT 'PATIENT',
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verificationToken" TEXT,
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."therapist_profiles" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "bio" TEXT,

    CONSTRAINT "therapist_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."specializations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "specializations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_SpecializationToTherapistProfile" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_SpecializationToTherapistProfile_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_verificationToken_key" ON "public"."users"("verificationToken");

-- CreateIndex
CREATE UNIQUE INDEX "therapist_profiles_userId_key" ON "public"."therapist_profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "specializations_name_key" ON "public"."specializations"("name");

-- CreateIndex
CREATE INDEX "_SpecializationToTherapistProfile_B_index" ON "public"."_SpecializationToTherapistProfile"("B");

-- AddForeignKey
ALTER TABLE "public"."therapist_profiles" ADD CONSTRAINT "therapist_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_SpecializationToTherapistProfile" ADD CONSTRAINT "_SpecializationToTherapistProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."specializations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_SpecializationToTherapistProfile" ADD CONSTRAINT "_SpecializationToTherapistProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."therapist_profiles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
