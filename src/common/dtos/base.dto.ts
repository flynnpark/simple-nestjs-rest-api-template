export class BaseOutput<T> {
  message?: string | undefined | null = null;
  result?: T | undefined | null = null;
}

export class BaseResponse<T> {
  success: boolean;
  path: string;
  message: string | null;
  result: T;
}
