# 🚀 API de Cadastro e Autenticação de Usuários (Node.js/Express)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)

Este projeto é uma API Backend robusta, desenvolvida em Node.js com Express e MongoDB (Mongoose), focada na implementação segura de funcionalidades de **Cadastro**, **Login** e **Autorização** (Rotas Protegidas).

## 🎯 Objetivo e Metodologia

* **Clean Code:** Estrutura em camadas **Controller-Service** para separação de responsabilidades.
* **Segurança:** Utilização de **JSON Web Tokens (JWT)** para autenticação e gestão de sessão.
* **Banco de Dados:** Conexão e modelagem de dados com **MongoDB** (Mongoose).

---

## ☁️ Teste Rápido (URL Pública)

Você pode testar esta API diretamente no seu navegador ou em ferramentas como Insomnia ou Postman.

### 🔗 URL Base do Deploy:
`https://api-cadastro-de-usuarios-kl4n.onrender.com`

### 1. Teste de Status (GET /)

Este teste verifica se o servidor está ativo na nuvem.

| Detalhe | Valor |
| :--- | :--- |
| **Rota** | `/` |
| **Método** | `GET` |
| **Esperado** | Status `200 OK` e uma mensagem JSON. |

### 2. Cadastro de Novo Usuário (POST /register)

Este teste valida a gravação no banco de dados e a emissão do Token JWT.

| Detalhe | Valor |
| :--- | :--- |
| **Rota** | `/api/users/register` |
| **Método** | `POST` |
| **Body (JSON)** |
```json
{
    "name": "Usuario Teste",
    "email": "teste@publico.com",
    "password": "SenhaSegura123"
}
