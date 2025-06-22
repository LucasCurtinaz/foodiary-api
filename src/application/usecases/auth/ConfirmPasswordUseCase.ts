import { AuthGateway } from '@infra/gateways/AuthGateway';
import { Injectable } from '@kernel/decorators/Injectable';

@Injectable()
export class ConfirmPasswordUseCase {
  constructor (
    private readonly authGateway: AuthGateway,
  ) {}

  async execute({
    email,
    confirmationCode,
    password,
  }: ConfirmPasswordUseCase.Input): Promise<ConfirmPasswordUseCase.OutPut> {
    await this.authGateway.confirmForgotPassword({
      email,
      confirmationCode,
      password,
    });
  }
}

export namespace ConfirmPasswordUseCase {
  export type Input = {
    email: string;
    confirmationCode: string;
    password: string;
  };

  export type OutPut = void;
}
