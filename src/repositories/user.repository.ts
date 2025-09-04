import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();

export class UserRepository {
  async createUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    role: Role, // use the enum from Prisma
    verificationToken: string
  ) {
    return await prisma.user.create({
      data: { firstName, lastName, email, password, role, verificationToken },
    });
  }

  async findByEmail(email: string) {
    return await prisma.user.findUnique({ where: { email } });
  }

  async findByVerificationToken(token: string) {
    return await prisma.user.findFirst({ where: { verificationToken: token } });
  }

  async updateVerification(
    token: string,
    isVerified: boolean,
    verificationToken: string | null
  ) {
    return await prisma.user.update({
      where: { verificationToken: token },
      data: { isVerified, verificationToken },
    });
  }

  async updateRefreshToken(id: string, refreshToken: string) {
    return await prisma.user.update({ where: { id }, data: { refreshToken } });
  }

  async updatePassword(token: string, password: string) {
    return await prisma.user.update({
      where: { verificationToken: token },
      data: { password, verificationToken: null },
    });
  }

  async updateVerificationById(userId: string, verificationToken: string | null) {
    return await prisma.user.update({
      where: { id: userId },
      data: { verificationToken },
    });
  }
}
