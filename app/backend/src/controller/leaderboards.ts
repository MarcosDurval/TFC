import { RequestHandler } from 'express';
import ServiceLeaderboards from '../services/leaderboards';

class Leaderboards {
  private _metodos = new ServiceLeaderboards();

  findAll:RequestHandler = async (req, res) => {
    const data = await this._metodos.findAll();
    return res.status(200).json(data);
  };

  findHome:RequestHandler = async (req, res) => {
    const result = await this._metodos.findAll(true, false);
    return res.status(200).json(result);
  };

  findVisit:RequestHandler = async (req, res) => {
    const result = await this._metodos.findAll(false, true);
    return res.status(200).json(result);
  };
}
export default Leaderboards;
