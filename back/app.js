import express from "express";
import cors from "cors"
import blogRoutes from "./routes/blogRoutes.js"
import db from "./database/db.js"

// defino el PUERTO
const port = 9000

// INSTANCIO un objeto con los metodos de express()
const app = express()

// CONFIGURO el proyecto

// hago que el SERVIDOR sea ACCESIBLE para cualquier dominio que solicite un recurso a través de un navegador
app.use(cors()) 
// middleware que analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body
app.use(express.json())
// defino RUTAS
app.use("/blogs", blogRoutes)
//app.use("/contactos", contactoRoutes)

// conexion a BBDD
try {
    await db.authenticate()
    console.log("conectado a BBDD ...")
} catch (error) {
    console.log(`ERROR de conexion: ${error}`)
}

// defino RUTAs
app.get("/", (req,res) => {
    res.send("hello world !!! ...")
})

app.get("/contacto", (req,res) => {
    res.send("bienvenido a CONTACTO !!! ...")
})

// INICIO el servidor
app.listen(port, () => {
    console.log(`SERVIDOR iniciado en http://localhost:${port}`)
})
