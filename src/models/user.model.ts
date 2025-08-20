import { Prisma } from "@prisma/client";

export const UserSchema = Prisma.defineModel({
  id: { type: "string", primary: true, default: { kind: "uuid" } },
  email: { type: "string", unique: true, required: true },
  password: { type: "string", required: true },
  role: {
    type: "enum",
    values: ["THERAPIST", "PATIENT", "ADMIN"],
    required: true,
  },
  isVerified: { type: "boolean", default: false },
  verificationToken: { type: "string", nullable: true },
  refreshToken: { type: "string", nullable: true },
});
