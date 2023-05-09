export function showPokemonsDetailOnClick() {
    return `
    <section class="pokemon-detail">
    <h1 class="pokemon-detail__title">Bulbasaur</h1>
    <div class="pokemon-detail__number"><span>#001</span></div>
    <div class="pokemon-detail__types">
        <ol class="pokemon-detail__types--list">
            <li class="pokemon-detail__type">Grass</li>
            <li class="pokemon-detail__type">Poison</li>
        </ol>
    </div>
    <figure>
        <img class="pokemon-detail__image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
    </figure>
    </section>
    <section class="pokemon-about__wrapper">
        <p class="pokemon-about__title">About</p>
        <hr>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Species</p>
            <p class="pokemon-about-infos__description">Seed</p>
        </div>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Height</p>
            <p class="pokemon-about-infos__description">2'3.6(0.70cm)</p>
        </div>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Weight</p>
            <p class="pokemon-about-infos__description">15.2 lbs(6.9kg)</p>
        </div>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Abilities</p>
            <p class="pokemon-about-infos__description">Overgrow, Chiorophyl</p>
        </div>
        <h2 class="pokemon-about__title-breeding">Breeding</h2>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Gender</p>
            <p class="pokemon-about-infos__description"><span>87.5%</span><span>12.5%</span></p>
        </div>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Egg Groups</p>
            <p class="pokemon-about-infos__description">Monster</p>
        </div>
        <div class="pokemon-about-infos">
            <p class="pokemon-about-infos__name">Egg Cycle</p>
            <p class="pokemon-about-infos__description">Grass</p>
        </div>
    </section>
    `
}