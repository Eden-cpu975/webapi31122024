const express=require('express');
const app=express();
const productRouter=require('./api/v1/routs/product');
const morgan=require('morgan');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

console.log(process.env.GOOGLE_USERS);
const secure=require('./api/v1/middlewars/secure');
app.use(secure);
app.use('/product',productRouter);

module.exports=app;