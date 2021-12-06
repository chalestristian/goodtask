## GoodTask
### Um novo jeito de ser produtivo
---
![Print da aplicação](https://github.com/chalestristian/goodtask/blob/main/img/print.png?raw=true)

---

## SOBRE:

Fruto de um projeto acadêmico do UniBh em parceria com a empresa Ci&T, surgiu-se o GoodTasks. Aplicação cujo o objetivo é a criação e gerenciamento de listas de tarefas de maneira facil, simples e intuitiva.

O objetivo da aplicação é facilitar o processo de criação e gerenciamento de tarefas, por isso, a aplicação foi desenvolvida com uma interface minimalista e agradável, assim, utilizando esse app, você estará habilitado para criar e gerenciar tarefas em segundos.

---


## DESENVOLVIDO POR

Thales Cristian - [github.com](https://github.com/chalestristian)

Márcio Gomes - [github.com](https://github.com/marcio-gomes-neto)

Neuber Tavares - [github.com](https://github.com/neubertavares)

Luisa Rosendo - [github.com](https://github.com/luisarosendo)

---

## TECNOLOGIAS UTILIZADAS

**FRONTEND:** Angular & Bootstrap

**BACKEND:** NodeJs, Typescript, Express, TypeOrm, DotEnv

**BANCO DE DADOS:** PostgreSQL 

---

## COMO EXCECUTAR:

Nosso app ainda está em desenvolvimento, por isso, não temos um excecutável.
Caso você seja Dev ou tenha familiaridade com as tecnologias acima, poderá excecutar o projeto localmente, seguindo os passos abaixo:

**Primeiramente, vamos configurar a api (goodtaskback):**

```
git clone https://github.com/chalestristian/goodtask.git
```
Entre na pasta do projeto e execute:
```
npm install 
```
Crie uma nova tabela de banco de dados conforme abaixo (Sugerimos o uso do pgAdmin4 para isso):
```
CREATE DATABASE tasks
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

CREATE TABLE public.tasks
(
    id serial NOT NULL,
    name character varying(255) NOT NULL,
    "desc" character varying(255) NOT NULL,
    active boolean NOT NULL,
    updated_at character varying(255) NOT NULL,
    created_at character varying(255) NOT NULL
);

ALTER TABLE IF EXISTS public.tasks
    OWNER to postgres;
    
```
Crie um arquivo .env para conectar ao banco de dados (similar a):

```
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=usuario
DB_PASSWORD=senha
DB_DATABASE=tasks
```
Por fm, rode:
```
npm run build 
```
