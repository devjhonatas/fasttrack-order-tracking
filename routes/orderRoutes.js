const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Endpoint para criar um novo pedido
router.post('/orders', async (req, res) => {
  try {
    const { orderId, status } = req.body;
    const newOrder = new Order({ orderId, status });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pedido', error });
  }
});

// Endpoint para listar todos os pedidos
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar pedidos', error });
  }
});

// Endpoint para consultar um pedido específico pelo ID
router.get('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findOne({ orderId: req.params.id });
    if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pedido', error });
  }
});

// Endpoint para atualizar o status de um pedido
router.patch('/orders/:id', async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findOneAndUpdate(
      { orderId: req.params.id },
      { status },
      { new: true }
    );
    if (!order) return res.status(404).json({ message: 'Pedido não encontrado' });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar status do pedido', error });
  }
});

module.exports = router;