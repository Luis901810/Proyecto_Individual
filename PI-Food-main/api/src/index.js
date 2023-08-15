const server = require("./app")
const { conn } = require("./db");
const PORT= 3001;

conn.sync({ force:true })
.then(() =>{
    server.listen(PORT, ()=>console.log("escuchando en el puerto:" + PORT))
})