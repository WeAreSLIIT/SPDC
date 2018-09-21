const express= require('express');
const router = express.Router();
const User = require('../models/user');

router.get("/",(req,res)=>{
    User.find({}).then((users)=>{
        res.send(users);
    });
});

router.get("/:username",(req,res)=>{
    User.find({id:req.params.id}).then((user)=>{
        res.send(user);
    });
});

router.post("/",(req,res)=>{
    User.create(req.body).then((user)=>{
        res.send(user);
    });
   
});

router.delete("/:username",(req,res)=>{
    User.findOneAndRemove({id:req.params.id}).then((user)=>{
        res.send(user);
    });
});

router.put("/:username",(req,res)=>{
    User.findOneAndUpdate(({id:req.params.id}),req.body).then(()=>{
        User.find({id:req.params.id}).then((user)=>{
            res.send(user);
        });
    });
});

module.exports = router;
