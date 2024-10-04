const express = require('express');
const Cart = require('../models/Cart');
const { auth } = require('../middleware/auth');
const router = express.Router();

// GET user's cart
router.get('/', auth, async (req, res) => {
  const cart = await Cart.findOne({ userId: req.user.id }).populate('products.productId');
  res.json(cart || { products: [] });
});

// POST to add an item to the cart
router.post('/', auth, async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await Cart.findOneAndUpdate(
    { userId: req.user.id },
    { $addToSet: { products: { productId, quantity } } },
    { new: true, upsert: true }
  );
  res.json(cart);
});

// DELETE to remove an item from the cart
router.delete('/:id', auth, async (req, res) => {
  const cart = await Cart.findOneAndUpdate(
    { userId: req.user.id },
    { $pull: { products: { _id: req.params.id } } },
    { new: true }
  );
  res.json(cart);
});

module.exports = router;
