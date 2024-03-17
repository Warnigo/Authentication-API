import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authSurvice: AuthService) {}

  @Post('login')
  login() {
    return this.authSurvice.login();
  }

  @Post('register')
  register() {
    return this.authSurvice.register();
  }
}
