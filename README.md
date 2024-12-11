# Estoque Plus+

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)


https://github.com/user-attachments/assets/fbc534ed-d5ba-4e5c-8d34-b957e0eaa960

Esta aplicação é um sistema de estoque, para armazenar produtos e realizar o controle dos depósitos. É necessário criar um login e senha para acessar o sistema e basta começar a cadastrar os seus produtos.

O front-end foi desenvolvido utilizando React, Next.js, JavaScript, TypeScript e Tailwind CSS. Já o back-end foi desenvolvido utilizando Node.js, Nest.js, Prisma ORM e PostgreSQL.

Esta aplicação foi construída para facilitar e possibilitar o armazenamento em estoque de produtos de qualquer estabelecimento, seja loja de roupas, material de construção, etc.

# 💻 Front-End

## 🚀 Primeiros passos

### Pré-requisitos:

Para utilizar a aplicação localmente, é necessário ter instalado em sua máquina:

- <a href="https://nodejs.org/en">NodeJs</a>
- <a href="https://git-scm.com">Git</a>

### Clonar

Para clonar este projeto na sua máquina local:

```bash
git clone https://github.com/victorzld/sistema-de-estoque.git
```

### Iniciar o projeto

```bash
cd estoque-de-produtos
cd frontend/pagina-estoque
npm i
npm run dev
```

# 👨‍💻 Banck-End

## 🚀 Primeiros passos

### Pré-requisitos:

- <a href="https://www.docker.com">Docker</a>
- <a href="https://www.postgresql.org">PostgreSQL</a>

### Clonar

```bash
git clone https://github.com/victorzld/sistema-de-estoque.git
```

### Iniciar o projeto

```bash
cd estoque-de-produtos
cd backend/db-estoque
npm i
npm run dev
```

### Executar localmente

- É necessário ter instalado na sua máquina o Docker e PostgreSQL. Criar o banco de dados referentes ao cadatro dos Protudos, e criar o banco de dados referente ao cadastro dos Usuários, para fazer o login no sistema.

## 📍 API Endpoints

| rota              | descrição                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /protutos</kbd>     | recupera informações do produto cadastrado [veja detalhes da resposta](#get-auth-detail)
| <kbd>POST /protutos</kbd>     | cadastro o produto no estoque [veja detalhes da resposta](#post-auth-detail)

<h3 id="get-auth-detail">GET /produtos</h3>

**RESPONSE**
```json
{
    "id": 17,
    "produto": "camiseta",
    "descricao": "camiseta polo",
    "quantidade": 17
  },
  {
    "id": 18,
    "produto": "calça",
    "descricao": "calça moletom",
    "quantidade": 20
  },
```

<h3 id="post-auth-detail">POST /produtos</h3>

**REQUEST**

```json
  
{
    "id": 20,
    "produto": "bolsa",
    "descricao": "bolsa de couro",
    "quantidade": 20
}
```

**RESPONSE**
```json
{
  {
    "id": 17,
    "produto": "camiseta",
    "descricao": "camiseta polo",
    "quantidade": 17
  },
  {
    "id": 18,
    "produto": "calça",
    "descricao": "calça moletom",
    "quantidade": 20
  },
  {
    "id": 20,
    "produto": "bolsa",
    "descricao": "bolsa de couro",
    "quantidade": 20
  }

}
```

## Licença

<a href="/LICENSE" >MIT</a>
