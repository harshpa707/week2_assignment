import { Router } from "express";

import authMiddleware
  from "../middleware/authMiddleware.js";

import {
  createNote,
  getNotes,
  updateNote,
  deleteNote
} from "../controllers/noteController.js";

const router = Router();

router.use(authMiddleware);

router.get("/", getNotes);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;