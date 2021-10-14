const express = require("express");
const app = express();
const routes = require('./routes');

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
      message: "Welcome to API",
    });
  });

app.use('/cursos', routes);  

app.listen(3000,()=>console.log("Servidor en el puerto 3000"));