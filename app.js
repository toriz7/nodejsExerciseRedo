const express = require('express');
const nunjucks= require('nunjucks');
const logger = require('morgan')

const admin = require('./routes/admin');
const { proppatch } = require('./routes/admin');

const app = express();
const port = 3000;

nunjucks.configure('template',{ //폴더 지정
    autoescape: true, //보안 이유로 설정
    express:app //앱 설정
})

app.use(logger('dev'));

/* 
body-paerser depreacated!!
*/
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/uploads',express.static('uploads')); // 앞 : 정적파일의 url, 뒤 : 정적파일의 폴더명

app.get('/', (req,res) => {
    res.send('express start');
});

app.use('/admin',admin)

app.listen( port, () => {
    console.log('Express listening on port', port);
});