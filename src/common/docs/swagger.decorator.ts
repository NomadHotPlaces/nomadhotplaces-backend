import { applyDecorators } from '@nestjs/common';

import { Type } from 'class-transformer';
import { IsNumber } from 'class-validator';

import { SWAGGER } from './swagger.constant';

export const SwaggerValidation = {
  id(): PropertyDecorator {
    return applyDecorators(
      Type(() => Number),
      IsNumber({}, { message: SWAGGER.ID.IS_NUMBER_MESSAGE }),
    );
  },
};
