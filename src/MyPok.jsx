import axios from "axios";
import {useEffect, useState} from "react";
import {useLoaderData} from "react-router-dom";

export function loader() {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get("https://6828a9996075e87073a48b20.mockapi.io/MyPokemons")
            .then((resp) => {setPokemon(resp.data)})
            .catch((err) => {console.log(err)})
    }, []);

    return pokemon
}

const Pok = () => {
    // const [pokemon, setPokemon] = useState([]);
    const pokLoad = useLoaderData()

    return (
        <>
            {pokLoad.map((item) => {
                return <div>
                    <h2>{item.name}</h2>
                    <h3>{item.speed}</h3>
                </div>
            })}



        </>
    )
}

export default Pok