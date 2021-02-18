const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require(__dirname + "/src/config/database.js");
const Comment = require("./src/app/models/Comments");


// const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
// const { IamAuthenticator } = require('ibm-watson/auth');
//
// const textToSpeech = new TextToSpeechV1({
//   authenticator: new IamAuthenticator({
//     apikey: 'ZykVFUTSmvuzm1KD8V3VTqdmE84QzoHFL4hIEA_3svPH',
//   }),
//   serviceUrl: 'https://api.us-south.speech-to-text.watson.cloud.ibm.com/instances/29cc2986-fda8-45c2-8d10-3eaf935a7a12',
//   disableSslVerification: true,
// });
//
// const getVoiceParams = {
//   voice: 'pt-BR_IsabelaV3Voice',
// };
//
// textToSpeech.getModel(getModelParams)
//   .then(speechModel => {
//     console.log(JSON.stringify(speechModel, null, 2));
//   })
//   .catch(err => {
//     console.log('error:', err);
//   });


// config Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// ROUTES GET COMMENTS
app.get('/comments', function(req, res) {
  Comment.findAll().then(function(comments){
    console.log(comments.comment);
    res.render('form', {comments: comments});
  });
});

// ROUTE POST COMMENTS
app.post('/add', function(req, res) {
    Comment.create({
        comment: req.body.comment
    }).then(function(){
        res.redirect("/comments");
    }).catch(function(err){
        res.send("Houve um erro: " + err);
    })

    // req.body.comment;
    // res.send(req.body.comment);
});

// routes.post("/comments", comments.create);

app.listen(3000, function() {
  console.log("Servidor rodando!");
});
