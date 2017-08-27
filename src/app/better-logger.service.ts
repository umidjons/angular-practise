import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable()
export class BetterLoggerService extends LoggerService {

  log(message: string) {
    console.log('-----------------');
    super.log(message);
    console.log('-----------------');
  }
}
