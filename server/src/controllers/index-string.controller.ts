import { Request, Response } from 'express';
import { Contract } from '../models/contract';
import { BadRequestError } from '../middlewares';

const indexString = async (req: Request, res: Response) => {
  try {
    const contractStrings = await Contract.find({});
    res.send(contractStrings);
  } catch (err: any) {
    throw new BadRequestError(err);
  }
};

export { indexString };
