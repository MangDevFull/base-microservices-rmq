import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from "@nestjs/microservices"
import { SubscribeController } from './subcribe.controller';
import { ConfigService, ConfigModule } from "@nestjs/config"


@Module({
  providers: [
    {
      provide: 'SUBSCRIBE_SERVICE',
      useFactory: (configService: ConfigService) => {
        const user = process.env.RABBITMQ_USER
        const password = process.env.RABBITMQ_PASSWORD
        const host = process.env.RABBITMQ_HOST
        const queueName = process.env.RABBITMQ_QUEUE_NAME
        return ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [`amqp://${user}:${password}@${host}`],
            queue: queueName,
            queueOptions: {
              durable: true,
            },
          },
        });
      },
      inject: [ConfigService],
    }
  ],
  controllers: [SubscribeController],
  imports: [ConfigModule],
})
export class SubscribeModule { }