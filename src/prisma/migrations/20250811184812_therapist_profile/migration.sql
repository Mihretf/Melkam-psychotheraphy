-- CreateTable
CREATE TABLE "public"."TherapistProfile" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bio" TEXT NOT NULL,

    CONSTRAINT "TherapistProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Specialzation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Specialzation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."_SpecialzationToTherapistProfile" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_SpecialzationToTherapistProfile_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "TherapistProfile_userId_key" ON "public"."TherapistProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Specialzation_name_key" ON "public"."Specialzation"("name");

-- CreateIndex
CREATE INDEX "_SpecialzationToTherapistProfile_B_index" ON "public"."_SpecialzationToTherapistProfile"("B");

-- AddForeignKey
ALTER TABLE "public"."TherapistProfile" ADD CONSTRAINT "TherapistProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_SpecialzationToTherapistProfile" ADD CONSTRAINT "_SpecialzationToTherapistProfile_A_fkey" FOREIGN KEY ("A") REFERENCES "public"."Specialzation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."_SpecialzationToTherapistProfile" ADD CONSTRAINT "_SpecialzationToTherapistProfile_B_fkey" FOREIGN KEY ("B") REFERENCES "public"."TherapistProfile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
