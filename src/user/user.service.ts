import { Injectable, Get } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { UserSchema } from '../schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private User,
  ) {}

  async findAll(query) {
    return this.User.find(query);
  }

  async save(user) {
    return await this.User.findOneAndUpdate({_id: user.id}, user,  {new: true, upsert: true}).then();
  }
}
