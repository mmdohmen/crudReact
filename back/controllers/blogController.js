import blogModel from "../models/blogModel.js";

// metodos CRUD
// mostrar todos los registro
export const getAllBlogs = async (req,res) => {
    try {
        const blogs =  await blogModel.findAll()
        res.json(blogs)
    } catch (error) {
        res.json({message: error.message})
    }
}

// mostrar un registro
export const getBlog = async (req,res) => {
    try {
        /*
        const blog = await blogModel.findAll({
            where: {id:req.params.id}
        })
        res.json(blog[0])
        */
        const blog = await blogModel.findOne({
            where: {id:req.params.id}
        })
        res.json(blog)
    } catch (error) {
        res.json({message: error.message})
    }
}

// crear un registro
export const createBlog = async (req,res) => {
    try {
        await blogModel.create(req.body)
        res.json({message:"registro incorporado a la bbdd ..."})
    } catch (error) {
        res.json({message: error.message})
    }
}

// modificar un registro
export const updateBlog = async (req,res) => {
    try {
        await blogModel.update(req.body, {
            where: {id:req.params.id}
        })
        res.json({message:"registro ACTUALIZADO a la bbdd ..."})
    } catch (error) {
        res.json({message: error.message})
    }
}

// borrar un registro
export const deleteBlog = async (req,res) => {
    try {
        await blogModel.destroy({
            where: {id:req.params.id}
        })
        res.json({message:"registro ELIMINADO de la bbdd ..."})
    } catch (error) {
        res.json({message: error.message})
    }
}