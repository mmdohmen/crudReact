import {Sequelize} from "sequelize"

// defino la CONEXION a BBDD
const db = new Sequelize ("socialmedia", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    port: 3306
})

export default db
