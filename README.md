# 🛒 Shopee Cart Simulator (Node.js)

Este é um projeto simples em **Node.js (JavaScript)** que simula o comportamento de um carrinho de compras semelhante ao da Shopee. Ele permite adicionar, remover e exibir itens no carrinho, além de calcular o total da compra.

## 🚀 Funcionalidades

- Criar itens com nome, preço e quantidade
- Adicionar itens ao carrinho
- Remover uma unidade de um item
- Deletar itens completamente do carrinho
- Exibir todos os itens no carrinho
- Calcular o valor total da compra

## 📁 Estrutura do Projeto

```

📦 shopee-cart-simulator/
├── index.js                # Arquivo principal: simula as ações do usuário
└── services/
├── cart.js             # Lógica das operações do carrinho
└── item.js             # Lógica de criação de itens

```

## 🧠 Exemplo de Execução

Ao rodar o projeto, a saída esperada será algo como:

```

🛒 Welcome to your Shopee Cart! 🛒

item encontrado no index:
1

Shopee Cart List:

1. hotwheels ferrari - R\$ 20.99 | 1x | Subtotal 20.99

Shopee Cart TOTAL IS:

🎁 TOTAL: 20.99

````

## ⚙️ Como executar

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/shopee-cart-simulator.git
````

2. Navegue até a pasta do projeto:

   ```bash
   cd shopee-cart-simulator
   ```

3. Instale as dependências (se necessário):

   ```bash
   npm install
   ```

4. Execute o projeto:

   ```bash
   node index.js
   ```

> ⚠️ Este projeto usa `ES Modules`, então certifique-se de que o `type` esteja definido como `"module"` no seu `package.json`.

## 📦 Requisitos

* [Node.js](https://nodejs.org/) v18 ou superior

## 🛠 Tecnologias Utilizadas

* [JavaScript (ES Modules)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en)

## 👨‍💻 Autor

**Gustavo Silva**
📧 [gugahenriquebatista@gmail.com](mailto:gugahenriquebatista@gmail.com)

---
