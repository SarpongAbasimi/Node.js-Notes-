//concepts to keep in mind when working with Node and Express
//Node "res.write" is low level when working with Express, its res.send
// To set up your virtual environment use dotenv
//create a file called .env and store in this file your environmentall variables
//To access the enviroment virable use a.set('name of the environment variable')
//Nodemon -> Remember to download that for hot reload


//initialize Express

const express = require('express');
const dotenv = require('dotenv').config;
const process = require('process');
const handlebar = require('handlebar');

app=express()
app.set(port,process.env.(name of the env variable)|| 3000);

app.get('/',(req,res)=>{
  res.send('what You want to send goes here')
});

//Since the port was set to the environment variable , the get the variable and use it as the port.
// if  there is no variable port 3000 will be used.
// The listen can take a second argument which is a callback function
app.listen(app.get('port'),()=>{
    console.log(`Listening on port ${app.get('port')}`)
});

// To add Static Files
//In order to add static file set express.static to the path on the file
//Remembet that /static will have to be in your url path when requesting for static files
app.use('/static', express.static(path.join(__dirname ,'static')));


//Express alllows for various templating engines
//Jade , pug, express handle bar and more.
// When setting the templating engine use
app.engine('handlebars') //You can set other parameters
//we can dell express where to find the layout('base template').
//defaultLayout is the name of the  base template
//extensionName if the name of the base template extension
//layoutDir is the layout directory
app.engine('handlebars',handlebars({defaultLayout :'layout',extensionName:'handlebars',layoutDir: __dirname + '/views/layouts/'}}))
app.set('view engine', 'handlebar')







