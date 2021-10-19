import { Request, response, Response } from 'express';
import { request } from 'http';
import { AuthenticateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { code } = req.body

    const service = new AuthenticateUserService()
    try {
      const result = await service.execute(code)
      return response.json(result)
    } catch (error) {
      return response.json({error: error.message})
    }
  }
}

export { AuthenticateUserController }