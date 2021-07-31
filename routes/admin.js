const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('admin 이후 url');
})

router.get('/products', (req,res) => {
    res.render('admin/products.html',{ //변수 자체를 message 라는 이름으로 주는 중
        message : "hello"
    });
});


module.exports = router;