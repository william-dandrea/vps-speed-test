import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {NewConnection, NewConnectionSchema} from "./schema/new-connection.schema";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://database:27017/new-connexion-testing'),
    MongooseModule.forFeature([{ name: NewConnection.name, schema: NewConnectionSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
