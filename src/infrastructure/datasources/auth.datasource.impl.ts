import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from '../../domain/index.js';

export class AuthDatasourceImpl implements AuthDatasource {
  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { email, name, password } = registerUserDto;

    try {
      return new UserEntity('1', name, email, password, ['USER']);
    } catch (error) {
      if (error instanceof CustomError) throw error;

      throw CustomError.unknown();
    }
  }
}
