# FastTrack Order Tracking API

# Descrição do Projeto:

Este projeto é uma API RESTful de Rastreamento de Pedidos desenvolvida para uma empresa fictícia chamada FastTrack, que simula uma solução de rastreamento para pedidos de e-commerce e logística. A API permite o cadastro, consulta e atualização de status de pedidos, proporcionando uma interface escalável e fácil de usar para gerenciar o fluxo de pedidos de clientes.

Tecnologias Utilizadas

    •    Node.js com Express: para construção do servidor e rotas.
    •    MongoDB com Mongoose: para persistência de dados.
    •    JavaScript: linguagem principal do projeto.

Funcionalidades

    1.    Cadastro de pedidos (POST /api/orders): Cria um novo pedido com um identificador exclusivo e status inicial.
    2.    Consulta de todos os pedidos (GET /api/orders): Retorna uma lista de todos os pedidos.
    3.    Consulta de um pedido específico (GET /api/orders/:id): Retorna as informações de um pedido específico pelo seu identificador.
    4.    Atualização de status de pedido (PATCH /api/orders/:id): Permite atualizar o status do pedido (ex. “Em processamento”, “Despachado”, “Em trânsito”, “Entregue”).

Como Executar Localmente

    1.    Clone o repositório:

git clone https://github.com/devjhonatas/fasttrack-order-tracking.git
cd fasttrack-order-tracking


    2.    Instale as dependências:

npm install


    3.    Configure o MongoDB:
    •    Certifique-se de que o MongoDB está rodando localmente em mongodb://127.0.0.1:27017/fasttrack, ou altere a URL de conexão no arquivo server.js conforme necessário.
    4.    Inicie o servidor:

node server.js

O servidor estará rodando em http://localhost:3000.

    5.    Testar os Endpoints:
    •    Use ferramentas como Postman ou Insomnia para enviar requisições aos endpoints da API.

Estrutura de Pastas

fasttrack-order-tracking
├── models
│   └── Order.js        # Modelo de pedido (Order)
├── routes
│   └── orderRoutes.js  # Definição das rotas de pedidos
└── server.js           # Configuração principal do servidor

Futuras Melhorias

    •    Adicionar autenticação e autorização.
    •    Implementar testes automatizados.
    •    Criar uma interface frontend para interação com a API.
