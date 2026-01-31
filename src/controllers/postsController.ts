import postModel from "../model/postModel";
import { Request, Response } from "express";
import BaseController from "./baseController";

class PostsController extends BaseController {
  constructor() {
    super(postModel);
  }

  // GET /post?sender=<id>
  async getBySender(req: Request, res: Response) {
    const sender = req.query.sender;
    const posts = await this.model.find({ sender });
    res.json(posts);
  }
}

export default new PostsController();
