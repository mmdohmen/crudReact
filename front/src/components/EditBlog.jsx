import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// url SERVIDOR
const url = "http://localhost:9000/blogs/"

// componente
export const EditBlog = () => {

    const [titulo, setTitulo] = useState("")         // defino/creo el ESTADO y la FUNCION q lo modifica
    const [contenido, setContenido] = useState("")   // defino/creo el ESTADO y la FUNCION q lo modifica

    const navigate = useNavigate()   // redirecciona 

    const {id} = useParams()

    // procedimiento para EDITAR un BLOG
    const update = async (evento) => {
        evento.preventDefault()
        axios.put(url+id,
            {
                title: titulo,
                content: contenido
            })
            navigate("/")
    }

    const getBlogById = async () => {
        const res = await axios.get(url+id)
        setTitulo(res.data.title)
        setContenido(res.data.content)
    }
    
    useEffect(() => { getBlogById() }, [])     // parametros: funcion q se ejecuta si cambian las dependencias, 
                                               //             array de dependencias

    return (
        <div>
            <h3>EDITAR Blog</h3>
            <form onSubmit={update}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" value={titulo} onChange={(evento) => setTitulo(evento.target.value)} />

                    <label className="form-label">Contenido</label>
                    <textarea cols="30" rows="10" className="form-control" value={contenido} onChange={(evento) => setContenido(evento.target.value)} ></textarea>

                    <button type="submit" className="btn btn-info">actualizar</button>
                </div>
            </form>
        </div>
    )

}