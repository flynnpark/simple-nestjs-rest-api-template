import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { map, Observable } from 'rxjs';

import { BaseOutput, BaseResponse } from 'common/dtos/base.dto';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, BaseResponse<T>>
{
  intercept(
    ctx: ExecutionContext,
    next: CallHandler,
  ): Observable<BaseResponse<T>> {
    const request: Request = ctx.switchToHttp().getRequest();
    return next.handle().pipe(
      map((data: BaseOutput<T>) => ({
        success: true,
        path: request.path,
        message: data?.message || null,
        result: data?.result || null,
      })),
    );
  }
}
