import { Controller, Get, Post, Body, Query } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
  ) {}

  @Get('query')
  findUser(@Query() query) {
    return this.userService.findAll(query);
  }

  @Post()
  saveUser(@Body() body) {
    return this.userService.save(body);
  }
}
