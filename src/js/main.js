import { loadPokemonItens } from "../controllers/show-poke-controller.js";

const pokemonsList = document.querySelector("#pokemonsList");
const loadForm = document.querySelector("#loadForm");
const pokeDetailHtml = document.querySelector("#modal-container");
const loadMoreBtn = document.querySelector("#loadMoreBtn");
let offset = 0;
let limit = 6;

async function getLi() {
    await loadPokemonItens(offset, limit, pokemonsList)
    let pokemons = document.querySelectorAll('.pokemon');
    return pokemons;
}

getLi().then((res) => {
    res.forEach(e => {
        e.addEventListener('click', (e) => {
            
        })
    })
});

loadForm.addEventListener('click', (e) => {
    e.preventDefault();
    loadMoreBtn.addEventListener('click', () => {
        // para que o user decida quantos serão carregados, basta mudar o 'limit'        
        offset += limit; 
        // document.querySelector("#loadMoreInput").value;
        loadPokemonItens(offset, limit);
    })
})



