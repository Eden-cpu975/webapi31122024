const express=require('express');
const app=express();
const productRouter=require('./api/v1/routs/product');
const morgan=require('morgan');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const secure=(res,req,next)=>{};
app.use((req,res,next)=>{
    let arrIps=["192.168.15","8.6.5.9","23.54.23.1"];
for(let i=0;i<arrIps.length;i++)
{
    if(req.ip==arrIps[i])
    {
        return next();
    }
}
return res.status(401).json({Msg:"Not Authorized"});
});

app.use('/product',productRouter);

module.exports=app;