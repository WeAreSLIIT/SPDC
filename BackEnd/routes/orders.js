const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.get("/", (req, res) => {
    Order.find({}).then((orders) => {
        res.send(orders);
    });
});

router.get("/:id", (req, res) => {
    Order.find({ id: req.params.id }).then((order) => {
        res.send(order);
    });
});

router.get("/username/:username", (req, res) => {
    Order.findOne({ username: req.params.username, status: 'Pending' }).then(order => {
        res.send(order);
    });
});

router.post("/", (req, res) => {

    Order.findOneAndUpdate({ username: req.body.username, status: 'Pending' }, req.body).then((data) => {
        
        if (data !== null) {
            Order.findOne({ username: req.body.username, status: 'Pending' }).then(order => {
                res.send(order);
            });
        }
        else {
            Order.create(req.body).then((order) => {
                res.send(order);
            });
        }
    });

});


router.delete("/:id", (req, res) => {
    Order.findOneAndRemove({ id: req.params.id }).then((order) => {
        res.send(order);
    });
});

router.put("/:id", (req, res) => {
    Order.findOneAndUpdate(({ id: req.params.id }), req.body).then(() => {
        Order.find({ id: req.params.id }).then((order) => {
            res.send(order);
        });
    });
});

module.exports = router;
