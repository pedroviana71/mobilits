import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';
import { LoginUserDto } from './dto/loginUser.dto';
import { LogoutDto } from './dto/logout.dto';
import { User } from '../common/decorators/user.decorator';
import { Public } from '../common/decorators/public.decorator';
import { refreshPayloadDto } from './dto/refreshPayload.dto';

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Public()
  @Post('createUser')
  createUser(@Body() dto: CreateUserDto) {
    console.log(dto);
    return this.userService.createUser(dto);
  }

  @Public()
  @Post('login')
  login(@Body() dto: LoginUserDto) {
    return this.userService.login(dto);
  }

  @Public()
  @Post('logout')
  logout(@User('id') id: LogoutDto) {
    return this.userService.logout(id);
  }

  @Public()
  @Post('refresh')
  refresh(@Body() refreshPayload: refreshPayloadDto) {
    return this.userService.refresh(
      refreshPayload.userId,
      refreshPayload.refreshToken,
    );
  }
}
