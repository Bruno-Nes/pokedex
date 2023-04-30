import { getPokemons } from "../services/poke-api.js";
import { convertPokemonToHtml } from "../view/pokemon-card.js"

const pokemonsList = document.querySelector("#pokemonsList");
const loadForm = document.querySelector("#loadForm");

const loadMoreBtn = document.querySelector("#loadMoreBtn");
let limit = 10;
let offset = 0;


function loadPokemonItens(offset, limit) {
    getPokemons(offset, limit).then((pokemonList = []) => {
        pokemonsList.innerHTML += pokemonList.map((pokemon)=>{
            return convertPokemonToHtml(pokemon)
        }).join('');
    })
}

loadPokemonItens(offset, limit);

loadForm.addEventListener('click', (e) => {
    e.preventDefault();
    loadMoreBtn.addEventListener('click', () => {
        // let limit = 10;
        // let offset = 0;
        offset = document.querySelector("#loadMoreInput").value;
        loadPokemonItens(offset, limit);
    })
})



