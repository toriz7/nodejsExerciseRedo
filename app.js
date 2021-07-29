const express = require('express');
const admin = require('./routes/admin');
const nunjucks= require('nunjucks');


const app = express();
const port = 3000;

nunjucks.configure('template',{ //폴더 지정
    autoescape: true, //보안 이유로 설정
    express:app //앱 설정
})


app.get('/', (req,res) => {
    res.send('express start');
});

app.use('/admin',admin)

app.listen( port, () => {
    console.log('Express listening on port', port);
});