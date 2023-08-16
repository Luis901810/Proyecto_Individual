const server = require("./app")
const { conn } = require("./db");
require("dotenv").config()
const {PORT} = process.env;


conn.sync({ force:true })
.then(() =>{
    server.listen(PORT, ()=>console.log("escuchando en el puerto:" + PORT))
})