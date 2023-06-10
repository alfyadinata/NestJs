import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async findAll() {
    return {
      data: await this.userService.findAll(),
    };
  }

  async findOne(@Param('id') id: number) {
    return await this.userService.findOne(id);
  }
}
