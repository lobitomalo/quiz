'use strict';
var models = require('../models/models.js ');
//Autoload
exports.load = function)req, res, next, quizId){
    models.Quiz.find(quizId).then(
        function(quiz) {
            if (quiz) {
                req.quiz = quiz;
                next();
            } else{
                nex (new Error('No existe quizId='+ quizId));
            }
        }
    ).catch(function(error){next(error);});
};
//Get /quizes/question
exports.index = function (req, res){
    models.Quiz.findAll().then(
        function(quizes){
    res.render('quizes/index', {quizes: quizes});
}).catch(function(error) { next(error);})
};
//get /quisez/:id
exports.show = function(req, res) {
    res.render('quizes/show', {quiz: req.quiz});
};

//get quizes/id/ansewer
exports.answer = function(req, res) {
    var resultado = 'Incorrecto';
    if (req.query.respuesta === req.quiz.respuesta) {
        resultado = 'Correcto';
    }
    res.render('quisez/answer', {quiz: req.quiz, respuesta: resultado});
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
/*
exports.index = function(req, res) {
    models.Quiz.findAll().then(function(quizes) {
        res.render('quizes/index.ejs', {quizes: quizes});
    })
};
*/
