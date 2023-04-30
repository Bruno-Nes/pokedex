export function convertPokemonToHtml(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">${10 > pokemon.number ? "#00" + pokemon.number : "#0" + pokemon.number}</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
    </div>
    </li>
    `
}