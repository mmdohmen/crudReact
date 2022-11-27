import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// url SERVIDOR
const url = "http://localhost:9000/blogs/"

// componente
export const CreateBlog = () => {

    const [titulo, setTitulo] = useState("")         // defino/creo el ESTADO y la FUNCION q lo modifica
    const [contenido, setContenido] = useState("")   // defino/creo el ESTADO y la FUNCION q lo modifica

    const navigate = useNavigate()                   // redirecciona 

    // procedimiento p/ CREAR y guardar un BLOG en la bbdd
    const crear = async (evento) => {
        evento.preventDefault()   // method cancels the event if it is cancelable
        await axios.post(url, 
            {
                title: titulo,
                content: contenido
            })
            navigate("/")
    }

    // interfaz
    return (
        <div>
            <h3>CREAR Blog</h3>
            <form onSubmit={crear}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" value={titulo} onChange={(evento) => setTitulo(evento.target.value)} required/>

                    <label className="form-label">Content</label>
                    <textarea cols="30" rows="10" className="form-control" value={contenido} onChange={(evento) => setContenido(evento.target.value)} required ></textarea>

                    <button type="submit" className="btn btn-secondary">crear</button>
                </div>
            </form>
        </div>
    )

}