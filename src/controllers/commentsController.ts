import commentModel from "../model/commentsModel";
import { Request, Response } from "express";
import BaseController from "./baseController";

class CommentsController extends BaseController {
  constructor() {
    super(commentModel);
  }

  // GET /comments/post/:postId
  async getByPost(req: Request, res: Response) {
    const postId = req.params.postId;
    const comments = await this.model.find({ postId });
    res.json(comments);
  }
}

export default new CommentsController();
