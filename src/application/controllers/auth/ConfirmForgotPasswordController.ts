import { Controller } from '@application/contracts/Controller';
import { ConfirmPasswordUseCase } from '@application/usecases/auth/ConfirmPasswordUseCase';
import { Injectable } from '@kernel/decorators/Injectable';
import { Schema } from '@kernel/decorators/Schema';
import { ConfirmForgotPasswordBody, confirmForgotPasswordSchema } from './schemas/confirmForgotPasswordSchema';

@Injectable()
@Schema(confirmForgotPasswordSchema)
export class ConfirmForgotPasswordController extends Controller<'public', ConfirmForgotPasswordController.Response> {
  constructor(private readonly confirmPasswordUseCase: ConfirmPasswordUseCase) {
    super();
  }

  protected override async handle(
    { body }: Controller.Request<'public', ConfirmForgotPasswordBody>,
  ): Promise<Controller.Response<ConfirmForgotPasswordController.Response>> {
    const { email, confirmationCode, password } = body;

    await this.confirmPasswordUseCase.execute({
      email,
      confirmationCode,
      password,
    });

    return {
      statusCode: 204,
    };
  }
}

export namespace ConfirmForgotPasswordController {
  export type Response = null;
}
