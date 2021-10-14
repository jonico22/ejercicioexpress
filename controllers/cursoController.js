let cursos = []
let indiceId = 1  

function listar(req,res){
    console.log(cursos)
    res.json({
        status:'ok',
        data: cursos
    });
}

function crear(req,res){
    let {name,description,price} = req.body

    let curso = {
        id: indiceId, 
        nombre: name, 
        descripcion: description,
        precio: price
    };
    cursos.push(curso);
    indiceId++;
    res.json({
        status:'ok',
        data: cursos
    });
}

function editar(req,res){
    let {name,description,price} = req.body
    let curso = cursos.find((elem)=>elem.id == req.params.id);
    console.log(curso)
  
    curso.nombre = name;
    curso.descripcion = description;
    curso.precio = price;
    res.json({
        status:'ok',
        data: curso
    });
}

function mostrar(req,res){
    let curso = cursos.find((elem)=>elem.id == req.params.id);
    console.log(curso)
    res.json({
        status:'ok',
        data: curso
    });
}

function eliminar(req,res){
    cursos = cursos.filter((elem)=>elem.id!=req.params.id);
    console.log(cursos)
    res.json({
        status:'ok',
        mensaje: "Curso eliminado"
    });
}

module.exports = { listar, crear, editar, eliminar , mostrar }