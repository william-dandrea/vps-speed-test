import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NewConnectionDocument = NewConnection & Document;

@Schema({
    collection: "new-connection-collection"
})
export class NewConnection {
    @Prop({ required: true })
    value: string;
}

export const NewConnectionSchema = SchemaFactory.createForClass(NewConnection);

