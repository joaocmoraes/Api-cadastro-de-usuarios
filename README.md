# 🚀 API de Cadastro e Autenticação (Node.js/Express)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)

Este projeto é uma API Backend robusta focada em **Autenticação e Autorização**, utilizando **Node.js, Express e MongoDB**.

## 🎯 Destaques do Projeto

* **Arquitetura:** Aplicação de **Clean Code** com separação de responsabilidades em camadas **Controller/Service**.
* **Segurança:** Implementação de **JSON Web Tokens (JWT)** para autenticação e gestão de sessão.
* **Deploy:** Configurado para **Deploy Contínuo** em nuvem (Render).

---

## ☁️ Teste Público da API (Deploy)

A API está ativa e pode ser testada diretamente usando a URL base no Insomnia ou Postman.

### 🔗 URL Base do Deploy:
`https://api-cadastro-de-usuarios-kl4n.onrender.com`

### 🧪 Endpoints e Testes

Siga a ordem dos testes para verificar o fluxo completo de autenticação:

| # | Rota/Método | Descrição e Ação | Body de Exemplo |
| :--- | :--- | :--- | :--- |
| **1.** | **GET /** | **Status (Server Check):** Verifica se o servidor está ativo. Esperado: Status `200 OK`. | *Nenhum* |
| **2.** | **POST /api/users/register** | **Cadastro:** Cria um novo usuário e retorna o Token JWT. **Ação:** Copie o Token retornado. | `{"email": "teste@publico.com", "password": "Senha123"}` |
| **3.** | **POST /api/users/login** | **Login:** Autentica o usuário com credenciais válidas. | `{"email": "teste@publico.com", "password": "Senha123"}` |
| **4.** | **GET /api/users/profile** | **Rota Protegida:** Acessa o perfil. **Ação:** Use **Bearer Token** com o Token copiado do Passo 2 ou 3. | *Nenhum* |
| **Resultados** | - | **Esperado:** Rotas 2, 3 e 4 devem retornar Status `200 OK` ou `201 Created`. | - |

---

## 🛠️ Como Rodar Localmente (Opcional)

1.  **Clone o repositório** e execute `npm install`.
2.  Crie um arquivo **`.env`** na raiz.
3.  Preencha-o com suas credenciais: `MONGODB_URI` e `JWT_SECRET`.
4.  **Inicie o Servidor:** `npm start`
