import { RegisterUserDto } from '../../domain/index.js';
import type { Request, Response } from 'express';

export class AuthController {
  constructor() {}

  login = (req: Request, res: Response) => {
    console.log(req,res)
  };

  register = (req: Request, res: Response) => {
    const [errorDto, registerDto] = RegisterUserDto.create(req.body);

    if (errorDto) return res.status(400).json({ message: errorDto });

    res.json(registerDto)
  };
}
