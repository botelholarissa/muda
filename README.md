# muda :seedling:

## Objetivo

- API com o objetivo de conectar pessoas e plantas 

Na rotina de trabalho e nas grandes cidades algumas pessoas não dedicam um tempo para conectar com a natureza. Com a Muda pretendo facilitar essa conexão através da troca de mudas e sementes e exibição de um jardim para seus amigos.

A ideia partiu da minha paixão por plantas e dificuldade de manter um jardim de apartamento. Ter um lugar onde trocar mudas e ideias sobre plantar na cidade é um desejo antigo que está saindo do papel aos poucos. 


## Ferramentas utilizadas


 - [mongodb](https://www.mongodb.com/)
 - [nodejs](https://nodejs.org/)
 - [npm](https://www.npmjs.com/)
 - [cors](https://www.npmjs.com/package/cors)
 - [dotenv](https://www.npmjs.com/package/dotenv)
 - [express](https://www.npmjs.com/package/express)
 - [mongoose](https://www.npmjs.com/package/mongoose)
 - [nodemon](https://www.npmjs.com/package/nodemon)




## Como utilizar?

Para utilizar a API localmente você precisa clonar o repositório:

`
git clone https://github.com/botelholarissa/muda.git
`

Instalar as dependências:

`
npm install
`

Subir o servidor:

`
npm start
`

Depois você pode utilizar o Postman, Insominia ou algum outro REST API Client para navegar pelas rotas abaixo.

## Rotas

### index
Método | Caminho | Descrição
------ | ------- | ---------:
GET | / | Retorna informações iniciais.

### users
Método | Caminho | Descrição
------ | ------- | ---------:
GET | /users | Retorna todos os usuários.
GET | /users/:id | Retorna o usuário pelo ID inserido.
POST | /users/create | Adiciona um usuário.
PUT | /users/update | Atualiza informações do usuário.
DELETE | /users/delete | Deleta um usuário.

### plants
Método | Caminho | Descrição
------ | ------- | ---------:
GET | /plants | Retorna todos os usuários.
GET | /plants/:id | Retorna o usuário pelo ID inserido.
POST | /plants/create | Adiciona um usuário.
PUT | /plants/update | Atualiza informações do usuário.
DELETE | /plants/delete | Deleta um usuário.

## TODO
[:heavy_check_mark:] Cadastrar  
[:heavy_check_mark:] Atualizar  
[:heavy_check_mark:] Listar todos  
[:heavy_check_mark:] Listar por ID  
[   ] Listar plantas por disponilibidade  
[   ] Listar plantas disponíveis por área  
[   ] Listar todas as plantas de um usuário  
[   ] Listar todos os usuários que possuem um tipo de planta  

## Arquitetura

<p align= "center">
<img src= "https://github.com/botelholarissa/muda/blob/main/img/MUDA.png">
<p>

## Aprendizados

Durante a execução do projeto pude perceber de forma mais clara os métodos e técnologias que preciso aprender para transformar todo "TODO" desse projeto em "done". O caminho que ainda falta para trilhar é longo, mas não me sinto mais sozinha.  
O curso aguçou ainda mais minha curiosidade por tecnologia e me deu várias ferramentas para resolver problemas reais com tecnologia.  
Agradeço imensamente a Reprograma e a XP.inc pela oportunidade de aprender tanto em tão pouco tempo.
