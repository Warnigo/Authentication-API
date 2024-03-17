import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login() {
    return { msg: 'I have logined' };
  }
  register() {
    return { msg: 'I have register' };
  }
}
