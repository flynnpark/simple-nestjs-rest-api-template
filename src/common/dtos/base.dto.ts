import { ApiProperty } from '@nestjs/swagger';

export class BaseOutput<T> {
  message?: string | undefined | null = null;
  result?: T | undefined | null = null;
}

export class BaseResponse<T> {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  path: string;

  @ApiProperty({ nullable: true })
  message: string | null;

  @ApiProperty({ nullable: true })
  result: T;
}
