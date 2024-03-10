import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authSurvice: AuthService) {}

  @Post('login')
  login() {
    return 'I am login';
  }

  @Post('register')
  register() {
    return 'I am register';
  }
}
