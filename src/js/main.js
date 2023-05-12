import { ControlApp } from '../controllers/Application.js';

const pokemonsList = document.querySelector("#pokemonsList");
const loadForm = document.querySelector("#loadForm");
const pokeDetailHtml = document.querySelector("#modal-container");
const pokeDetailHtmlWrapper = document.querySelector("#modal-container__wrapper");
const cardDetailArray = [pokeDetailHtml,pokeDetailHtmlWrapper]
const loadMoreBtn = document.querySelector("#loadMoreBtn");
// const morePokemonsLi1 = document.querySelector("#morePokemonsLi1");
// const morePokemonsLi2 = document.querySelector("#morePokemonsLi2");
// const morePokemonsLi3 = document.querySelector("#morePokemonsLi3");
let offset = 0;
let limit = 6;

// start the application
const controlApp = new ControlApp();
controlApp.buildPokemons(offset, limit, pokemonsList, cardDetailArray);

loadMoreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //animacao do menu
    loadForm.classList.toggle('active')
    const newLimit = document.querySelectorAll(".pagination li").forEach((item, index) => { 
        item.addEventListener('click', (_) => {
            if(index == 0){
                return 6
            }else if (index == 1){
                return 10
            }else {
                return 15
            }
        });
       
      })

      console.log(newLimit);
    // para que o user decida quantos serão carregados, basta mudar o 'limit'        
    offset += limit; 
    // controlApp.buildPokemons(offset, limit, pokemonsList, cardDetailArray);
})



