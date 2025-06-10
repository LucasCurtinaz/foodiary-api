import { Injectable } from '@kernel/decorators/Injectable';
import { CreateMealUseCase } from './CreateMealUseCase';

@Injectable()
export class HelloUseCase {
  constructor(private readonly createMealUseCase: CreateMealUseCase) {}

  async execute(input: HelloUseCase.Input): Promise<HelloUseCase.OutPut> {
    return {
      helloUseCase: input.email,
      data: await this.createMealUseCase.execute(),
    };
  }
}

export namespace HelloUseCase {
  export type Input = {
    email: string;
  };

  export type OutPut = {
    helloUseCase: string;
    data: any;
  };
}
