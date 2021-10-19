import { Request, Response } from 'express';
import { UserProfileService } from '../services/ProfileUserService';

class UserProfileController {
  async handle(req: Request, res: Response) {
    try {
      const { user_id } = req.body
      const service = new UserProfileService()
      const result = await service.handle(user_id)

      return res.json(result)
    } catch (error) {
      res.send({ errorCode: error.message })
    }
  }
}

export { UserProfileController }