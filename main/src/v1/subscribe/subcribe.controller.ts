import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('subscribes')
export class SubscribeController {
    constructor(
        @Inject("SUBSCRIBE_SERVICE")
        private readonly clientProxy: ClientProxy,
    ) { }
    @Get()
    async index() {
        return this.clientProxy.send(
            {
                cmd: "add-subscriber"
            },
            { haha: "ssshshsh" }
        )
    }

}