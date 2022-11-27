import express from "express"
import { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog } from "../controllers/blogController.js"

const router = express.Router()

// rutas   -   localhost:9000/blogs/
router.get("/", getAllBlogs)
router.get("/:id", getBlog)
router.post("/", createBlog)
router.put("/:id", updateBlog)
router.delete("/:id", deleteBlog)


export default router
