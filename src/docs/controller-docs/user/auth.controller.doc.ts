import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
} from '@nestjs/swagger';

import { SwaggerMethodDocType } from '@/common';

import { EXCEPTION } from '@/docs/exception-docs';
import { AuthController } from '@/modules/auth';

export const AuthControllerDoc: SwaggerMethodDocType<AuthController> = {
  join(summary: string) {
    return applyDecorators(
      ApiOperation({
        summary,
        description: '회원가입 양식을 받아 신규 회원으로 등록합니다.',
      }),
      ApiCreatedResponse({ description: '회원가입에 성공했습니다.' }),
      ApiBadRequestResponse({ description: '잘못된 인증 정보 입력입니다.' }),
      ApiInternalServerErrorResponse({
        description: EXCEPTION.COMMON.INTERNAL_SERVER_ERROR.message,
      }),
    );
  },
};
