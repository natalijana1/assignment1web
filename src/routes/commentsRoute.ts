import { Router } from "express";
import commentsController from "../controllers/commentsController";

const router = Router();

router.get("/", (req, res) => commentsController.getAll(req, res));
router.get("/post/:postId", (req, res) =>
  commentsController.getByPost(req, res)
);
router.get("/:id", (req, res) => commentsController.getById(req, res));
router.post("/", (req, res) => commentsController.create(req, res));
router.put("/:id", (req, res) => commentsController.update(req, res));
router.delete("/:id", (req, res) => commentsController.del(req, res));

export default router;
