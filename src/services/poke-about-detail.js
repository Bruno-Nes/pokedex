import { Detail } from '../model/detail-model.js';

export function convertPokeApiDetailToAboutDetail(detail, eggGroupNamesArray) {
    const pokemonDetail = new Detail();
    pokemonDetail.number = detail.order;
    pokemonDetail.name = detail.name;
    const types = detail.types.map(typesSlot => typesSlot.type.name);
    const [type] = types;
    pokemonDetail.types = types;
    pokemonDetail.type = type;

    const abilities = detail.abilities.map((abilityList) => abilityList.ability.name);
    pokemonDetail.abilities = abilities;

    pokemonDetail.eggGroups = eggGroupNamesArray;

    pokemonDetail.height = (detail.height) / 10;
    pokemonDetail.weight = (detail.weight) / 10;

    pokemonDetail.hp = detail.stats[0].base_stat;
    pokemonDetail.attack = detail.stats[1].base_stat;
    pokemonDetail.defense = detail.stats[2].base_stat;
    pokemonDetail.specialAttack = detail.stats[3].base_stat;
    pokemonDetail.specialDefense = detail.stats[4].base_stat;
    return pokemonDetail;
}