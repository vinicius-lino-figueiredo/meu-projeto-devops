# Projeto DevOps

Esta é uma aplicação web para fins educativos da disciplina de DEVOPS TOOLS.

## Tecnologias envolvidas

- React.js
- Express.js
- MongoDB
- Docker
- Postman

## Como instalar

Para instalar o projeto localmente, siga os seguintes passos:

1. Clone o repositório
   ```bash
   git clone https://github.com/souvictorcassio/meu-projeto-devops.git
   ```
2. Entre na pasta do frontend
   ```bash
   cd /meu-projeto-devops/frontend
   ```
3. Instale as dependências
   ```bash
   npm i
   ```
4. Volte para a pasta raiz
   ```bash
   cd ..
   ```
5. Suba o container
   ```bash
   docker compose up --build
   ```
6. Teste
   ```bash
   http://localhost:3000
   ```

## Teste no postman

1. POST

   ```bash
   URL:

   http://localhost:5000/items

   Ex (body raw/JSON):

   {
        "nome": "Camiseta DevOps",
        "descricao": "Camiseta preta com estampa geek"
   }
   ```

2. GET

   ```bash
   URL:

   http://localhost:5000/items

   Ex (retorno):

   [
    {
        "_id": "6834aeff913df768e5bc47f3",
        "nome": "Camiseta DevOps",
        "descricao": "Camiseta preta com estampa geek",
        "__v": 0
    }
   ]
   ```

## Alunos

- Adiles Bezerra Xavier,
- Emília Neri Vanderley,
- Victor Cássio de Sousa.
