import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonResponse } from '../interfaces/common-response.interface';

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, CommonResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<CommonResponse<T>> {
    return next.handle().pipe(
      map((data): CommonResponse<T> => {
        if (
          typeof data === 'object' &&
          data !== null &&
          'message' in data &&
          'data' in data
        ) {
          const { message, data: payload } = data as {
            message: string;
            data: T;
          };
          return {
            success: true,
            message:
              typeof message === 'string'
                ? message
                : '요청이 성공적으로 처리되었습니다.',
            data: payload,
          };
        }

        return {
          success: true,
          message: '요청이 성공적으로 처리되었습니다.',
          data,
        };
      }),
    );
  }
}
