import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { SubscribersModule } from './subscribers/subscriber.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/microservice'), SubscribersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
