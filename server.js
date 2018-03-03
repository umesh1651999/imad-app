var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone = {
    title:'article-one|umesh sharma',
    heading:'ARTICLE-ONE',
    date:'3 march,2018',
    content: '<p><h4>content of article-one will be displayed here......000</h4></p>'
};
function createTemplate(data){
    title=data.title;
    heading=data.heading;
    date=data.date;
    content=data.content;
var htmlTemplate=`
<html>
<head>
    <title>${title}</title>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div>
        <a href="/">home</a>
    </div>
    <hr>
    <div>
    <h3>${heading}</h3>
    </div>
    <hr>
    <div>
    ${date}
    </div>
    <div>
        <p><h4>${content}</h4></p>
    </div>
    </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
   res.send(createTemplate(articleone)); 
});
app.get('/article-two',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));  
});
app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));  
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
