import {Controller, Get, Param, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/ping')
  public async ping(): Promise<any> {
    return this.appService.ping();
  }

  @Get('/new-connection/:id')
  public async getOneConnection(@Param('id') id: string): Promise<any> {
    return this.appService.getOneConnection(id);
  }

  @Post('/new-connection')
  public async postOneConnection(): Promise<any> {
    return this.appService.postOneConnection();
  }


}
