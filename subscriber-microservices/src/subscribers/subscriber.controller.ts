import { Controller, Get } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { MessagePattern } from '@nestjs/microservices';
@Controller('subcribers')
export class SubscribersController {
    constructor(
        private readonly subscriberService: SubscriberService,
    ) { }
    @MessagePattern({ cmd: 'add-subscriber' })
    create(data) {
        return this.subscriberService.create(data)
    }

    @MessagePattern({ cmd: 'get-all-subscriber' })
    findAll() {
        return this.subscriberService.findAll()
    }
}