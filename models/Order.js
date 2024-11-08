const mongoose = require('mongoose');

// Estrutura do pedido
const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  status: { type: String, required: true, enum: ['Em processamento', 'Despachado', 'Em trânsito', 'Entregue'] },
  createdAt: { type: Date, default: Date.now },
});

// Modelo de Pedido
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;