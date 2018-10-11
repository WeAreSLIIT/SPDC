const express= require('express');
const router = express.Router();
const User = require('../models/user');
const bcryptjs = require('bcryptjs');

router.post("/login",(req,res)=>{
    User.findOne({username:req.body.username}).then((user)=>{
        bcryptjs.compare(req.body.password,user.password,(err,isMatch)=>{
            if(err) throw err;
            if(isMatch) {
                res.json({
                    user,
                    login :'success'
                });
            }
            else {
                res.json({
                    login:'fail'
                });
            }
        });
    });
   
});
router.get("/",(req,res)=>{
    User.find({}).then((users)=>{
        res.send(users);
    });
});

router.get("/:username",(req,res)=>{
    User.find({username:req.params.username}).then((user)=>{
        res.send(user);
    });
});

router.post("/",(req,res)=>{
   bcryptjs.genSalt(10,(err,salt)=>{
       bcryptjs.hash(req.body.password,salt,(err,hash)=>{
           req.body.password = hash;
           User.create(req.body).then((user)=>{
            res.send(user);
        });
       });
   });
});

router.delete("/:username",(req,res)=>{
    User.findOneAndRemove({username:req.params.username}).then((user)=>{
        res.send(user);
    });
});

router.put("/:username",(req,res)=>{
    User.findOneAndUpdate(({username:req.params.username}),req.body).then(()=>{
        User.find({username:req.params.username}).then((user)=>{
            res.send(user);
        });
    });
});

module.exports = router;
