const express= require('express');
const router = express.Router();
const Medicine = require('../models/medicine');

router.get("/",(req,res)=>{
    Medicine.find({}).then((medicines)=>{
        res.send(medicines);
    });
});

router.get("/:id",(req,res)=>{
    Medicine.find({id:req.params.id}).then((medicine)=>{
        res.send(medicine);
    });
});

router.post("/",(req,res)=>{
    Medicine.create(req.body).then((medicine)=>{
        res.send(medicine);
    });
   
});

router.delete("/:id",(req,res)=>{
    Medicine.findOneAndRemove({id:req.params.id}).then((medicine)=>{
        res.send(medicine);
    });
});

router.put("/:id",(req,res)=>{
    Medicine.findOneAndUpdate(({id:req.params.id}),req.body).then(()=>{
        Medicine.find({id:req.params.id}).then((medicine)=>{
            res.send(medicine);
        });
    });
});

module.exports = router;
