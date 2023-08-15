
const Razorpay = require('razorpay');

const dotenv=require("dotenv");
dotenv.config();


module.exports.orders = (req, res) => {
    var instance = new Razorpay({
        key_id: process.env.key_id,
        key_secret: process.env.key_secret
    });

    var options = {
        amount: req.body.amount*100,  // amount in the smallest currency unit
        currency: "INR"
        // Add other necessary options as needed
    };

    instance.orders.create(options, function(err, order) {
        if (err) {
            return res.status(500).json({ code: 500, message: "Server error" });
        }
        return res.status(200).json({ code: 200, message: 'Order created', data: order });
    });
};


