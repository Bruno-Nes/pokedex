export function showPokemonsDetailOnClick(pokemonDetail) {
    return `
    <section class="pokemon-detail ${pokemonDetail.type}">
    <h1 class="pokemon-detail__title">${pokemonDetail.name}</h1>
    <div class="pokemon-detail__number"><span>${10 > pokemon.number ? "#00" + pokemon.number : "#0" + pokemon.number}</span></div>
    <div class="pokemon-detail__types">
        <ol class="pokemon-detail__types--list">
            ${pokemonDetail.types.map(type => `<li class="pokemon-detail__type ${type}">${type}</li>`)}
        </ol>
    </div>
    <figure>
        <img class="pokemon-detail__image" src="${pokemonDetail.photo}" alt="${pokemonDetail.name}">
    </figure>
    </section>
    <section class="pokemon-about__wrapper">
        <p class="pokemon-about__title">About</p>
        <hr>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Abilities</p>
            ${pokemonDetail.abilities.map(ability => `<p class="pokemon-about-infos__description">${ability}</p>`)}    
        </div>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Height</p>
            <p class="pokemon-about-infos__description">${pokemonDetail.height}</p>
        </div>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Weight</p>
            <p class="pokemon-about-infos__description">${pokemonDetail.weight}</p>
        </div>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Egg Groups</p>
            ${pokemonDetail.eggGroups.map(eggGroup => `<p class="pokemon-about-infos__description">${eggGroup}</p>`)}
        </div>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Egg Cycle</p>
            <p class="pokemon-about-infos__description">${pokemonDetail.type}</p>
        </div>
        <h2 class="pokemon-about__title-breeding">Stats</h2>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">HP</p>
            <p class="pokemon-about-infos__description">${pokemonDetail.hp}</p>
        </div>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Attack</p>
            <p class="pokemon-about-infos__description">${pokemonDetail.attack}</p>
        </div>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Defense</p>
            <p class="pokemon-about-infos__description">${pokemonDetail.defense}</p>
        </div>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Special Attack</p>
            <p class="pokemon-about-infos__description">${pokemonDetail.specialAttack}</p>
        </div>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Special Defense</p>
            <p class="pokemon-about-infos__description">${pokemonDetail.specialDefense}</p>
        </div>
        <button class="detail-btn ${pokemonDetail.type}" id="detail-btn">Close</button>
    </section>
    `
}

export function closeView(parentHtml) {
    const btn = document.querySelector("#detail-btn")
    if(btn) {
        btn.addEventListener('click', () => {
            parentHtml.style.display = "none";
        })
    }
}