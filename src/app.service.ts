import { Injectable } from '@nestjs/common';

import { BaseOutput } from 'common/dtos/base.dto';

@Injectable()
export class AppService {
  getHello(): BaseOutput<null> {
    return { message: 'Hello World!' };
  }
}
