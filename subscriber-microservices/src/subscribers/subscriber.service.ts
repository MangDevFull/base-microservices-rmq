import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Subscriber, SubcriberDocument } from './subscriber.entities';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class SubscriberService {
    constructor(@InjectModel(Subscriber.name) private subcriberModel: Model<SubcriberDocument>) { }
    create(data) {
        return data
    }

    findAll() {
        return this.subcriberModel.find()
    }
}