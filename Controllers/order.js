import sendMail from "../Middleware/sendMail.js";
import { Cart } from "../Models/Cart.js";
import { Order } from "../Models/Order.js";
import { Product } from "../Models/Product.js";
import dotenv from "dotenv";
import crypto from "crypto";


dotenv.config();

export const newOrderCod = async (req, res) => {
    try {
      const { method, phone, address } = req.body;
  
      const cart = await Cart.find({ user: req.user._id }).populate("product");
  
      let subTotal = 0;
  
      cart.forEach((i) => {
        const itemSubtotal = i.product.price * i.quantity;
  
        subTotal += itemSubtotal;
      });
  
      const items = await Cart.find({ user: req.user._id })
        .select("-_id")
        .select("-user")
        .select("-__v");
  
      const order = await Order.create({
        items,
        method,
        user: req.user._id,
        phone,
        address,
        subTotal,
      });
  
      for (let i of order.items) {
        let product = await Product.findOne({ _id: i.product });
  
        product.$inc("stock", -1 * i.quantity);
        product.$inc("sold", +i.quantity);
  
        await product.save();
      }
  
      await Cart.find({ user: req.user._id }).deleteMany();
  
      await sendMail(
        req.user.email,
        "Easy Shop",
        `Thanks your shopping of ₹ ${subTotal} from our Platform your order will be deliverd soon`
      );
  
      res.status(201).json({
        message: "Order Placed Successfully",
        order,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  export const getAllOrder = async (req, res) => {
    try {
      const orders = await Order.find({ user: req.user._id });
  
      res.json({ orders: orders.reverse() });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  export const getAllOrderAdmin = async (req, res) => {
    try {
      if (req.user.role !== "admin")
        return res.status(403).json({
          message: "Unauthorized",
        });
  
      const orders = await Order.find();
  
      res.json({ orders });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  

  export const getMyOrder = async (req, res) => {
    try {
      const order = await Order.findById(req.params.id).populate("items.product");
  
      res.json({ order });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };

  export const updateStatus = async (req, res) => {
    try {
      if (req.user.role !== "admin") {
        return res.status(403).json({
          message: "This is admin route",
        });
      }
  
      const order = await Order.findById(req.params.id);
  
      if (order.status === "Pending") {
        order.status = "Processing";
  
        await sendMail(
          req.user.email,
          "Lets negotiate",
          "Your order is in processing and it will be delivered soon"
        );
  
        await order.save();
  
        return res.json({
          message: "order status updated",
        });
      }
  
      if (order.status === "Processing") {
        order.status = "Shipped";
  
        await sendMail(
          req.user.email,
          "Lets negotiate",
          "Your order is Shipped and it will be delivered soon"
        );
  
        await order.save();
  
        return res.json({
          message: "order status updated",
        });
      }
  
      if (order.status === "Shipped") {
        order.status = "Out for delivery";
  
        await sendMail(
          req.user.email,
          "Lets negotiate",
          "Your order is Out for delivery and it will be delivered soon"
        );
  
        await order.save();
  
        return res.json({
          message: "order status updated",
        });
      }
  
      if (order.status === "Out for delivery") {
        order.status = "Delivered";
  
        await sendMail(
          req.user.email,
          "Lets negotiate",
          "Your order is Delivered Thank you for shopping"
        );
  
        await order.save();
  
        return res.json({
          message: "order status updated",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  

//   export const newOrderOnline = async (req, res) => {
//     try {
//       const { method, phone, address } = req.body;
  
//       const cart = await Cart.find({ user: req.user._id }).populate("product");
  
//       let subTotal = 0;
  
//       cart.forEach((i) => {
//         const itemSubtotal = i.product.price * i.quantity;
  
//         subTotal += itemSubtotal;
//       });
  
//       const items = await Cart.find({ user: req.user._id })
//         .select("-_id")
//         .select("-user")
//         .select("-__v");
  
//       const orderOptions = {
//         items,
//         method,
//         user: req.user._id,
//         phone,
//         address,
//         subTotal,
//       };
  
//       const options = {
//         amount: Number(subTotal) * 100,
//         currency: "INR",
//       };
  
//       const order = await instance.orders.create(options);
  
//       res.status(200).json({
//         order,
//         orderOptions,
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: error.message,
//       });
//     }
//   };

export const newOrderOnline = async (req, res) => {
    try {
        const { method, phone, address } = req.body;

        const cart = await Cart.find({ user: req.user._id }).populate("product");

        let subTotal = 0;

        cart.forEach((i) => {
            const itemSubtotal = i.product.price * i.quantity;
            subTotal += itemSubtotal;
        });

        const items = await Cart.find({ user: req.user._id })
            .select("-_id")
            .select("-user")
            .select("-__v");

        const orderOptions = {
            items,
            method,
            user: req.user._id,
            phone,
            address,
            subTotal,
        };

        // Create the order directly in your database
        const order = await Order.create(orderOptions);

        // Optionally, clear the cart after order creation
        await Cart.deleteMany({ user: req.user._id });

        res.status(201).json({
            message: "Order placed successfully",
            order,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
