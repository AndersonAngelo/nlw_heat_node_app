import { Request, Response } from 'express';
import { serverHttp } from '../app';
import { ProfileUserService } from '../services/ProfileUserService';

class ProfileUserController {
  async handle(request:Request, response:Response) {
    const { user_id } = request;

    const service = await new ProfileUserService();

    const result = await service.execute(user_id);

    return response.json(result);
  };
}

export {ProfileUserController};