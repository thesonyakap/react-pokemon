import {useLoaderData, useParams} from "react-router-dom";

export default function Pokemon() {

const pokemons = useLoaderData()
    const params = useParams()

    return (
        <>
            {pokemons.map((item) => {
                if (item.id.toString() === params.pokemonId) {
                    return <div key={item.id}>
                        <div id="headerPok">
                            <div>
                                <img style={{width: "200px", height: "200px", borderRadius: "20px"}} src={item.image.thumbnail} alt={item.name.english}/>
                            </div>
                            <div>
                                <h2 style={{marginLeft: "15px"}}>{item.name.english}</h2>
                            </div>
                        </div>
                        <h3>Base</h3>
                        <span>Attack:
                            {item.base.Attack}, Defense:
                            {item.base.Defense}, HP:
                            {item.base.HP}, Speed:
                            {item.base.HP}</span>
                        <p>Type: {item.type}</p>
                        <p>Species: {item.species}</p>
                        <p>Profile: Egg:
                            {item.profile.egg[0]}, {item.profile.egg[1]}, Height:
                            {item.profile.height}, Weight:
                            {item.profile.weight}</p>
                        <h4>Description: {item.description}</h4>
                    </div>
                }
                })}
        </>
    )}