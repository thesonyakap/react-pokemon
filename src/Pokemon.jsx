import {useEffect} from "react";
import axios from "axios";
import {useLoaderData, useParams} from "react-router-dom";

export default function Pokemon() {

const pokemons = useLoaderData()
    const params = useParams()
    // console.log(params)
    console.log("Pokemons from pokemons", pokemons)

    // console.log(Object.keys(pokemons))
    // console.log(pokemons.{name})

    // const pok = JSON.stringify(pokemons)
    // console.log(pok)

    // console.log(pokemons[0])
    // console.log(params)

    console.log("rendering Pokemon")


    return (
        <>
            {pokemons.map((item) => {
                console.log(item)
                // console.log("Item ", item.id)
                // console.log(item.id.toString(), params.pokemonId)
                if (item.id.toString() === params.pokemonId) {
                    return <div key={item.id}>
                        <img src={item.image.thumbnail} alt={item.name.english}/>
                        <h2>Name: {item.name.english}</h2>
                        <h3>Base</h3>
                        <h3>Attack:
                            {item.base.Attack}, Defense:
                            {item.base.Defense}, HP:
                            {item.base.HP}, Speed:
                            {item.base.HP}</h3>
                        <h3>Type: {item.type}</h3>
                        <h3>Species: {item.species}</h3>
                        <h3>Profile: Egg:
                            {item.profile.egg[0]}, {item.profile.egg[1]}, Height:
                            {item.profile.height}, Weight:
                            {item.profile.weight}</h3>
                        <h3>Description: {item.description}</h3>
                    </div>
                }
                })}
        </>
    )}