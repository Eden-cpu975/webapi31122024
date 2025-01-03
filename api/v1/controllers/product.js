module.exports={
    Get:(req,res)=>{     //עבור כל המוצריםEND POINT-נקודת קצה
         return res.status(200).json({Msg:"all products"});
     },
     GetById:(req,res)=>{
         let prodid=req.params.id;//קבלת הפרמטר שנשלח לנקודת הקצה
         return res.status(200).json({Msg:"product id "+ prodid});
     },
     AddNew:(req,res)=>{
        let prodid=req.params.id;
         return res.status(200).json({Msg:"add new product"});
     },
     Update:(req,res)=>{
        let prodid=req.params.id;
         return res.status(200).json({Msg: "Update product id"+ prodid });
     },
    Delete:(req,res)=>{
     let prodid=req.params.id
     return res.status(200).json({Msg:"delete product id"+ prodid});
 }
 };