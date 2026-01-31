import { Router } from "express";
import postsController from "../controllers/postsController";

const router = Router();

router.get("/", (req, res) => {
  if (req.query.sender) {
    postsController.getBySender(req, res);
  } else {
    postsController.getAll(req, res);
  }
});
router.get("/:id", (req, res) => postsController.getById(req, res));

export default router;
