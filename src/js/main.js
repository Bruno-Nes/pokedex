import { start } from '../controllers/Application.js';

const pokemonsList = document.querySelector("#pokemonsList");
const loadForm = document.querySelector("#loadForm");
const pokeDetailHtml = document.querySelector("#modal-container");
const loadMoreBtn = document.querySelector("#loadMoreBtn");
let offset = 0;
let limit = 6;

// start the application
start(offset, limit, pokemonsList);

loadMoreBtn.addEventListener('click', () => {
    //animacao do menu
    loadForm.classList.toggle('active')


    // para que o user decida quantos serão carregados, basta mudar o 'limit'        
    offset += limit; 
    // document.querySelector("#loadMoreInput").value;
    loadPokemonItens(offset, limit, pokemonsList);
})



