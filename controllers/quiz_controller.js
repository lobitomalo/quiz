'use strict';
var models = require('../models/models');
//Get /quizes/question
exports.show = function (req, res){
    models.Quiz.findAll().succes(function(quiz){
    res.render('quizes/show', {quiz: quiz});
    })
};

//GET /quizes/answer
/*exports.answer = function (req, res) {
    models.Quiz.find(req.params.quizId).then(function(quiz){
    if (req.query.respuesta === quiz.respuesta) {
        res.render('quizes/answer', {respuesta: 'Correcto'});
    } else {
        res.render('quizes/answer', {respuesta: 'Incorrecto'});
    }
    })
};*/
exports.index = function(req, res) {
    models.Quiz.findAll().then(function(quizes) {
        res.render('quizes/index.ejs', {quizes: quizes});
    })
};
