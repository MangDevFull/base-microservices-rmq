import { Module } from '@nestjs/common';
import { SubscribersController } from './subscriber.controller';
import { SubscriberService } from './subscriber.service';
import { Subscriber, SubscriberSchema } from './subscriber.entities';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
    imports: [MongooseModule.forFeature([{ name: Subscriber.name, schema: SubscriberSchema }])],
    controllers: [SubscribersController],
    providers: [SubscriberService],
})
export class SubscribersModule { }