// Importando as bibliotecas
const express = require('express');
const mongoose = require('mongoose');

// Configurações básicas
const app = express();
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Conexão com o MongoDB (substitua pela sua conexão do MongoDB)
mongoose.connect('mongodb://127.0.0.1:27017/fasttrack', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB com sucesso');
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB:', error);
});

// Rota de teste para verificar se o servidor está funcionando
app.get('/', (req, res) => {
  res.send('API de Rastreamento de Pedidos FastTrack');
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});