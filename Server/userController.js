var db = require('./database/database');
var bcrypt = require('bcryptjs');

//Funcionalidades de validación login
module.exports.login = function (req, res) {
    if(req.body.user == "root" && req.body.pass == "toor"){
        res.send({result: "Ok"});
    }else{
        res.send({result: "Invalid"});
    }
}

//Funcionalidades de gestion de datos a los estudiantes
module.exports.addStudents = function (req,res) {
    console.log("Volvi a entrar");
    var query = "INSERT INTO students (identification, names, lastName, gender) VALUES ('"+req.body.id+"','"+req.body.names+"','"+req.body.lastName+"','"+req.body.gender+"');";

    db.query(query).spread(function (result, metadata) {
        res.status(200).send({result: "Usuario creado satisfactoriamente."});
    }).catch(function (err) {
        res.status(500).send({ result: "Error de inserción de datos."});
    });
}

module.exports.showStudents = function (req,res) {
    var query = "SELECT * FROM students;";

    db.query(query).spread(function (result, metadata) {
        res.status(200).send(result);
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}

module.exports.showSpecificStudents = function (req, res) {
    var query = "SELECT * FROM students WHERE identification='"+req.query.id+"';";

    db.query(query).spread(function (result, metadata) {
        res.status(200).send(result);
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}

module.exports.editStudents = function (req,res) {
    var query = "UPDATE students SET names='"+req.body.names+"', lastName='"+req.body.lastName+"', gender='"+req.body.gender+"' WHERE identification='"+req.body.id+"';";

    db.query(query).spread(function (result, metadata) {
        res.status(200).send({ result: "Estudiante editado"});
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}

module.exports.deleteStudents = function (req,res) {
    var query = "DELETE FROM students WHERE identification = '"+req.query.id+"';";
    db.query(query).spread(function (result, metadata) {
        res.status(200).send({ result: "Estudiante eliminado"});
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}

//Funcionalidades de gestion de datos de los profesores
module.exports.addProfessors = function (req,res) {
    var query = "INSERT INTO professors (identification, names, lastName, gender) VALUES ('"+req.body.id+"','"+req.body.names+"','"+req.body.lastName+"','"+req.body.gender+"');";

    db.query(query).spread(function (result, metadata) {
        res.status(200).send({ result: "Profesor añadido"});
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}


module.exports.showProfessors = function (req,res) {
    var query = "SELECT * FROM professors;";

    db.query(query).spread(function (result, metadata) {
        res.status(200).send(result);
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}

module.exports.showSpecificProfessors = function (req, res) {
    var query = "SELECT * FROM professors WHERE identification='"+req.query.id+"';";

    db.query(query).spread(function (result, metadata) {
        res.status(200).send(result);
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}


module.exports.editProfessors = function (req,res) {
    var query = "UPDATE professors SET names='"+req.body.names+"', lastName='"+req.body.lastName+"', gender='"+req.body.gender+"' WHERE identification='"+req.body.id+"';";

    db.query(query).spread(function (result, metadata) {
        res.status(200).send({ result: "Profesor editado"});
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}


module.exports.deleteProfessors = function (req,res) {
    var query = "DELETE FROM professors WHERE identification = '"+req.body.id+"';";

    db.query(query).spread(function (result, metadata) {
        res.status(200).send({ result: "Profesor eliminado"});
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}

//Funcionalidades de gestión de datos de los cursos
module.exports.addCourses = function (req,res) {
    var query = "INSERT INTO courses (code, name, observations) VALUES ('"+req.body.code+"','"+req.body.name+"','"+req.body.observations+"');";

    db.query(query).spread(function (result, metadata) {
        res.status(200).send({ result: "Curso creado"});
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}

module.exports.showCourses = function (req,res) {
    var query = "SELECT * FROM courses;";

    db.query(query).spread(function (result, metadata) {
        res.status(200).send(result);
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}

module.exports.showSpecificCourses = function (req, res) {
    var query = "SELECT * FROM courses WHERE code='"+req.query.id+"';";

    db.query(query).spread(function (result, metadata) {
        res.status(200).send(result);
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}

module.exports.editCourses = function (req,res) {
    var query = "UPDATE courses SET name='"+req.body.name+"', observations='"+req.body.observations+"' WHERE code='"+req.body.code+"';";

    db.query(query).spread(function (result, metadata) {
        res.status(200).send({ result: "Curso editado"});
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}


module.exports.deleteCourses = function (req,res) {
    var query = "DELETE FROM courses WHERE code = '"+req.body.id+"';";//En la vista recursiva todas las eliminaciones contienen un ID para la llave primaría del elemento

    db.query(query).spread(function (result, metadata) {
        res.status(200).send({ result: "Curso eliminado"});
    }).catch(function (err) {
        res.status(500).send({ result: "Hubo un problema al crear el usuario."});
    });
}