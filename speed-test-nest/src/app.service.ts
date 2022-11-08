import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {NewConnection, NewConnectionDocument} from "./schema/new-connection.schema";
import {Model} from "mongoose";

@Injectable()
export class AppService {

  constructor(@InjectModel(NewConnection.name) private tableCartModel: Model<NewConnectionDocument>) {}

  public async ping(): Promise<any> {
    return new Promise<any>((resolve) => {
      resolve({
        "status": 200,
        "message": "Everything work correctly"
      })
    })
  }

  public async getOneConnection(id: string): Promise<any> {
    return this.tableCartModel.findById(id).exec();
  }

  public async postOneConnection(): Promise<any> {
    const newConnection: NewConnection = new NewConnection();
    newConnection.value = `New value ${Math.random() * 1000}-${Math.random() * 1000}`

    // { returnDocument: 'after' }
    return await this.tableCartModel.create(newConnection)
  }
}
