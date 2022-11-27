import axios from 'axios'                     // CLIENTE http
import { useState, useEffect } from 'react'   // crear ESTADOS
import { Link } from 'react-router-dom'       // RUTAS

// url SERVIDOR
const url = "http://localhost:9000/blogs/"

// componentes
const ShowBlogs = () => {

    const [blogs, setBlog] = useState([])   // defino/creo el ESTADO y la FUNCION q lo modifica

    useEffect(() => { getBlogs() }, [])     // parametros: funcion q se ejecuta si cambian las dependencias, 
                                            //             array de dependencias

    // procedimiento para MOSTRAR todos los BLOGS de la bbdd
    const getBlogs = async () => {
        const res = await axios.get(url)
        setBlog(res.data)
    }

    // procedimiento para ELIMINAR un BLOG
    const delBlog = async (id) => {
        await axios.delete(`${url}${id}`)   // parametro: url/id
        getBlogs()                                // renderizo la actualizacion
    }

    // retorno de ShowBlogs
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <small>CREAR blog</small>
                    <Link to="/create" className="btn btn-primary mt-2 mb-2"><i className='fa-solid fa-plus'></i></Link>
                    <table className='table'>
                        <thead className='table-dark'>
                            <tr>
                                <td>Title</td>
                                <td>Content</td>
                                <td>Actions</td>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.map( (blog) => (
                                <tr key={blog.id}>
                                    <td> {blog.title} </td>
                                    <td> {blog.content}</td>
                                    <td>
                                        <Link to={`/edit/${blog.id}`} className='btn btn-success'><i className='fas fa-edit'></i></Link>
                                        <button onClick={() => delBlog(blog.id)} className="btn btn-danger"><i className='fas fa-trash'></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default ShowBlogs
