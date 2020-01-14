import { Module } from '@nestjs/common';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest-mongo'),
    UserModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
