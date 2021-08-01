const express = require('express');
const router = express.Router();

function testMiddleWare( req, res, next ){
    console.log('첫번째 미들웨어');
    next();  // 다음으로 제어권을 넘기겠다는 의미
}

function testMiddleWare2( req, res, next ){
    console.log('두번째 미들웨어');
    next();
}

router.get('/',testMiddleWare,testMiddleWare2,(req,res)=>{
    res.send('admin 이후 url');
})

router.get('/products', (_,res) => {
    res.render('admin/products.html',{ //변수 자체를 message 라는 이름으로 주는 중
        message : "hello"
    });
});

router.get('/products/write',(req,res) => {
    res.render('admin/write.html');
});

router.post('/products/write', (req,res)=>{
    res.send(req.body);
})



module.exports = router;