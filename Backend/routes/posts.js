import express from 'express'
import { addPost, deletePost, getPost, getPosts, updatePost, getUser } from '../controllers/post.js'

const router = express.Router()

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);
router.get("/user/img", getUser);

export default router