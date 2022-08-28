import { Controller, Get } from '@nestjs/common';
import { ListItem } from '@peta-byte/ui-medley';
import { AppService } from './app.service';

@Controller('geo')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/countries-cities')
  getData(): ListItem[] {
    return this.appService.getData();
  }
}
