const express= require('express');
const router = express.Router();
const Point = require('../models/point');

router.get("/",(req,res)=>{
    Point.find({}).then((points)=>{
        res.send(points);
    });
});

router.get("/:username",(req,res)=>{
    Point.findOne({username:req.params.username}).then((point)=>{
        res.send(point);
    });
});

router.post("/",(req,res)=>{
    Point.create(req.body).then((point)=>{
        res.send(point);
    });
   
});

router.delete("/:username",(req,res)=>{
    Point.findOneAndRemove({username:req.params.username}).then((point)=>{
        res.send(point);
    });
});

router.put("/:username",(req,res)=>{
    Point.findOneAndUpdate(({username:req.params.username}),req.body).then(()=>{
        Point.find({username:req.params.username}).then((point)=>{
            res.send(point);
        });
    });
});

module.exports = router;
