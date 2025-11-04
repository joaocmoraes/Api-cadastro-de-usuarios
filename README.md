# 🚀 API de Cadastro e Autenticação de Usuários (Node.js/Express)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)

Este projeto é uma API Backend robusta, desenvolvida em Node.js com Express e MongoDB (Mongoose), focada na implementação segura de funcionalidades de **Cadastro**, **Login** e **Autorização** (Rotas Protegidas).

## 🎯 Objetivo e Metodologia

O objetivo principal deste projeto foi demonstrar a aplicação de boas práticas e arquitetura de software em um ambiente de Backend:

* **Clean Code (Controller/Service):** Estrutura em camadas Controller-Service para separação de responsabilidades, garantindo modularidade e fácil manutenção.
* **Segurança (JWT):** Utilização de JSON Web Tokens (JWT) para autenticação e gestão de sessão sem estado (stateless).
* **Banco de Dados:** Conexão e modelagem de dados com **MongoDB** usando o ODM **Mongoose**.
* **CRUD Básico:** Implementação das operações essenciais de Cadastro (C) e Leitura de Perfil (R).

## ✨ Rotas da API

| Rota | Método | Descrição | Requer Token? |
| :--- | :--- | :--- | :--- |
| `/api/users/register` | `POST` | Cria um novo usuário, hasheia a senha e retorna o Token JWT. | Não |
| `/api/users/login` | `POST` | Autentica o usuário com email/senha e retorna um novo Token JWT. | Não |
| `/api/users/profile` | `GET` | Retorna os dados do perfil do usuário logado. | **Sim** (Usa `authMiddleware`) |

---

## ☁️ Deploy (Teste Rápido)

Para testar o Backend **imediatamente** sem configurar o ambiente local, use as credenciais de teste abaixo em uma ferramenta como Insomnia ou Postman.

**URL Base da API (Após o Deploy):** `[COLE A URL DO SEU DEPLOY AQUI]`

* **Usuário de Teste:** (Cadastre um usuário no ambiente de deploy para ser usado como exemplo)
    * Email: `usuario.demo@teste.com`
    * Senha: `demo1234`
    
---

## 🛠️ Como Rodar Localmente (Desenvolvimento)

Para rodar o projeto em sua máquina e fazer alterações, siga os passos abaixo:

### 1. Clonar e Instalar

```bash
# 1. Clone o repositório
git clone SUA_URL_DO_REPOSITORIO_AQUI api-cadastro-usuarios

# 2. Acesse a pasta
cd api-cadastro-usuarios

# 3. Instale as dependências
npm install
