Pokedex 

# Start
Para rodar o projeto será necessário ter a versão mais recente de Node.js instalado em sua máquina.

Após dar o clone do projeto ou fazer um fork. Rode:
npm install 

# Sobre o Projeto

Desenvolvi esse projeto como um desafio feito pelo Renan Johannsen instrutor na DIO. Um projeto que faz uma requisição do tipo GET ao pokeAPI, retornando dados que serão usados. Aprendemos o uso do fetch, uma função do JavaScript para fazer requisições HTTP e como podemos manipular esses dados para serem apresentados em tela.
Ao longo do projeto vi a oportunidade de usar uma arquitetura chamada MVC(model, view, controller), a fim, de que pudesse praticar um pouco do que já conheço da arquitetura, além de aprender outros detalhes.  Mas, por que usar essa arquitetura?
Bom, no decorrer do desenvolvimento de um software, a aplicação vai ficando cada vez mais complexa, ganhando mais features e ficando mais robusta. Sabendo disso, temos que a partir do estágio inicial devemos construir algo organizado e escalável para que problemas futuros sejam evitados. Ou pelo menos diminuí-los. É aí que o MVC entra!. 
Vamos entender um pouco do que é o MVC. Consiste em model-view-controller, a model sendo um modelo de dados que serão recebidos e/ou enviados para o banco de dados. No projeto a model foi criada, como um objeto, tendo como propriedades nome, tipo, imagem do pokemon e etc.
A view é a parte visual do projeto, no caso seria o HTML da aplicação. Nenhuma ação de lógica ou regra de negócios pode executar ali, pode ser criada, mas não executada. Também foi criada uma espécie de view na pokédex, uma função que retornaria o HTML, mais especificamente uma tag li com as informações do pokémon.
Antes de irmos para o controller, temos que falar de uma outra camada, chamada service(você já deve ter ouvido falar dela no Angular). Na service é onde ficam os métodos de acesso ao back-end é ela quem tem acesso a model para garantir que os dados certo sejam enviados ou buscados. 
Agora sim mas não menos importante os controllers, que é quem une tudo e faz tudo acontecer, é quem faz a view ser mostrada na tela, pega os dados buscados da service e disponibiliza na view, pega os dados da view que um usuário digitou por exemplo e manda para o back. 

# Próximos passos
Bug em request - Fazer com que os detalhes dos pokemons apareçam em tela. Devido ao aumento de detalhes do projeto a forma com que a request a API é feita para ter acesso aos detalhes do pokemon 
se tornou um pouco complexa, fazendo com que surgisse alguns bugs. 
Animações - Quando for carregado mais pokemons, ao usuário clicar e 'Load More' uma animação apareça de quantos pokemons ele deseja puxar da API
MVC - Sempre que possível aplicar mais conceitos de MVC para que o projeto se torne cada vez mais robusto
