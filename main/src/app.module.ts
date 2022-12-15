import { Module, } from '@nestjs/common';
import { ModuleV1 } from './v1/index.module';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import { SubscribeModule } from './v1/subscribe/subcribe.module';


dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/main'),
    ModuleV1,
    SubscribeModule
  ],
  providers: [],

})

export class AppModule { }
