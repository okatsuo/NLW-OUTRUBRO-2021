import { Request, Response } from 'express';
import { io } from '../app';
import { CreateMessageService } from '../services/CreateMessageService';
import { GetLast3MessagesService } from '../services/GetLast3MessagesService';

class GetLast3MessagesController {
  async handle(req: Request, res: Response) {
    try {
      const service = new GetLast3MessagesService();

      const result = await service.execute()
      return res.json(result)
    } catch (error) {
      res.json({ errorCode: error.message })
    }
  }
}

export { GetLast3MessagesController }