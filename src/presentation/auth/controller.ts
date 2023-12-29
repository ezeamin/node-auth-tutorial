import { AuthRepository, RegisterUserDto } from '../../domain/index.js';
import type { Request, Response } from 'express';

export class AuthController {
  constructor(
    private readonly authRepository: AuthRepository,
  ) {}

  login = (req: Request, res: Response) => {
    console.log(req,res)
  };

  register = (req: Request, res: Response) => {
    const [errorDto, registerDto] = RegisterUserDto.create(req.body);

    if (errorDto) return res.status(400).json({ message: errorDto });

    this.authRepository.register(registerDto!).then((user) => {
      res.json(user)
    }).catch((err) => {
      res.status(500).json(err)
    });
  };
}
