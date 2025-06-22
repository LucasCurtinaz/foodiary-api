import { InvalidCredentials } from '@application/errors/application/InvalidCredentials';
import { AuthGateway } from '@infra/gateways/AuthGateway';
import { Injectable } from '@kernel/decorators/Injectable';

@Injectable()
export class SignInUseCase {
  constructor (
    private readonly authGateway: AuthGateway,
  ) {}

  async execute({
    email,
    password,
  }: SignInUseCase.Input): Promise<SignInUseCase.OutPut> {
    try {
      const {
        accessToken,
        refreshToken,
      } = await this.authGateway.signIn({ email, password });

      return {
        accessToken,
        refreshToken,
      };
    } catch {
      throw new InvalidCredentials();
    }
  }
}

export namespace SignInUseCase {
  export type Input = {
    email: string;
    password: string;
  };

  export type OutPut = {
    accessToken: string;
    refreshToken: string;
  };
}
