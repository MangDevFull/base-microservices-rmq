import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubcriberDocument = HydratedDocument<Subscriber>;

@Schema()
export class Subscriber {
  @Prop()
  name: string;

  @Prop()
  age: number;
}

export const SubscriberSchema = SchemaFactory.createForClass(Subscriber);