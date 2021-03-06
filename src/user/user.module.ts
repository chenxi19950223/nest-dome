import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from '../schema/user.schema';
import { UserService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema, collection: 'user'}]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
