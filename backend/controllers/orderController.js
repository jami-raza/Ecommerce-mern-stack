const Order = require("../model/orderModel");
const asyncHandler = require("express-async-handler");

// @desc    create Order
// @route   POST /api/orders
// @access  Pricate

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});
// @desc    Get order by id
// @route   GET /api/orders/:id
// @access  Private

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if(order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error('Order not Found')
  }
});

// @desc    Get logged user order list
// @route   GET /api/orders/myorders
// @access  Private

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({user:req.user._id})
  res.json(orders)
 
});

// @desc    Get all orders
// @route   GET /api/orders
// @access  Private/Admin

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user' ,'id name')
  res.json(orders)
 
});

// @desc    Update Order to deliver
// @route   GET /api/orders
// @access  Private/Admin

const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id)
  
  if(order) {
    order.isDelivered = true
    order.isPaid = true
    order.PaidAt = Date.now()
    order.DelivereedAt = true

    const updatedOrder = await order.save()
    res.json(updatedOrder)
  } else {
    res.status(404)
    throw new Error('Order not found')
  }
 
});


module.exports = { addOrderItems, getOrderById, getMyOrders, getOrders, updateOrderToDelivered };
