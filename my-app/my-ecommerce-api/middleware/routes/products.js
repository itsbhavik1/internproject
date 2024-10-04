const express = require('express');
const Product = require('../models/Product');
const { auth, adminAuth } = require('../middleware/auth');
const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// GET a specific product
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

// POST a new product (admin only)
router.post('/', auth, adminAuth, async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

// PUT to update a product (admin only)
router.put('/:id', auth, adminAuth, async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

// DELETE a product (admin only)
router.delete('/:id', auth, adminAuth, async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).send('Product not found');
  res.send('Product deleted');
});

module.exports = router;
