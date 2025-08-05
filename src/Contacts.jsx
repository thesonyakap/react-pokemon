import localforage from "localforage";
import { matchSorter } from "match-sorter";
import axios from "axios";
import EditPokemon from "./Edit.jsx";


export async function getPokemons(query) {
    const resp = await axios.get(`https://6828a9996075e87073a48b20.mockapi.io/Tasks`)
    let pokemons = await localforage.getItem('pokemons');
    if (!pokemons) pokemons = []
    if (query) {
        pokemons = matchSorter(pokemons, query);
    }
    return resp.data
}

export async function createPokemons() {
    const resp = await axios.get(`https://6828a9996075e87073a48b20.mockapi.io/Tasks`)
    let id = Math.random().toString(36).substring(2, 9);
    let pekemon = { id, createdAt: Date.now() };
    let pokemon = await getPokemons();
    pokemon.unshift(pekemon);
    return <EditPokemon/>
}



