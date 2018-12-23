var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./database/database');
var cors = require('cors');

//Inclusión de los middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//Inclusión de los callbacks
var userController = require('./userController');

//Rutas
app.post('/api/login', userController.login);
app.post('/api/addStudents', userController.addStudents);
app.get('/api/showStudents', userController.showStudents);
app.get('/api/showSpecificStudents', userController.showSpecificStudents);
app.put('/api/editStudents', userController.editStudents);
app.delete('/api/deleteStudents', userController.deleteStudents);
app.post('/api/addProfessors', userController.addProfessors);
app.get('/api/showProfessors', userController.showProfessors);
app.get('/api/showSpecificProfessors', userController.showSpecificProfessors);
app.put('/api/editProfessors', userController.editProfessors);
app.delete('/api/deleteProfessors', userController.deleteProfessors);
app.post('/api/addCourses', userController.addCourses);
app.get('/api/showCourses', userController.showCourses);
app.get('/api/showSpecificCourses', userController.showSpecificCourses);
app.put('/api/editCourses', userController.editCourses);
app.delete('/api/deleteCourses', userController.deleteCourses);

//Escucha al servidor
db.sync().then(function () {
    app.listen(3000, ()=>{
        console.log("Works");
    }); 
});
