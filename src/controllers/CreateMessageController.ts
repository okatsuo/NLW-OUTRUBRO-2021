import { Request, response, Response } from 'express';
import { AuthenticateUserService } from '../services/AuthenticateUserService';
import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
  async handle(req: Request, res: Response) {
    const { message } = req.body
    const { user_id } = req
    if(!message) return res.status(400).json({errorCode: "message not provided"})
    const service = new CreateMessageService()
    const result = await service.execute(message, user_id)

    return res.json(result)
  }
}

export { CreateMessageController }