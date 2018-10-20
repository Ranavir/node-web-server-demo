const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();
hbs.registerPartials(__dirname + '/views/partials');//adds the capability to handle tiles structure
hbs.registerHelper('getFullYear',() => {
  return new Date().getFullYear();
});
app.use(express.static(__dirname+ '/public'));
app.use((req, res,next)=>{
		var now = new Date().toString();

		console.log(`${now} : ${req.method} ${req.url}`);//logger
		next();
	}
);
// app.set('view engine', 'hbs');
app.set('view engine', 'hbs');

app.get('/',(req, res) => {
  res.render('home.hbs',{
    pageTitle : 'Dashboard',
    name : "Ranavir",
    likes : ['Movies','Songs','Cricket']
  });
  // res.send({
  //   name : "Ranavir",
  //   likes : ['Movies','Songs','Cricket']
  // });
});

app.get('/about', (req, res) => {
  res.render('about.hbs',{
    pageTitle : 'About Page'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage : "Unable to handle request"
  });
});

app.get('/projects',(req, res)=>{
  res.render('projects.hbs',{
    pageTitle : 'Projects'
  });
});
// var listener = app.listen(() =>{
//   console.log(`Server is up and listening on port ${listener.address().port}`);
// });

var listener = app.listen(port,() =>{
  console.log(`Server is up and listening on port ${listener.address().port}`);
});
