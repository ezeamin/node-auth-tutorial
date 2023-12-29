import { Validators } from '../../../configs/validators.js';

export class RegisterUserDto {
  private constructor(public name: string, public email: string, public password: string) {}

  static create(object: { [key: string]: unknown }): [string?, RegisterUserDto?] {
    const { name, email, password } = object;

    // Name validation
    if (!name) return ['name is required'];
    if (typeof name === 'string' && name.trim().length < 3) return ['name must be at least 3 characters long'];

    // Email validation
    if (!email) return ['email is required'];
    if (typeof email === 'string' && !Validators.email.test(email)) return ['email is invalid'];

    // Password validation
    if (!password) return ['password is required'];
    if (typeof password === 'string' && password.trim().length < 6)
      return ['password must be at least 6 characters long'];

    const finalData = {
      name: (name as string).trim(),
      email: (email as string).trim().toLowerCase(),
      password: (password as string).trim(),
    };

    return [undefined, new RegisterUserDto(finalData.name, finalData.email, finalData.password)];
  }
}
