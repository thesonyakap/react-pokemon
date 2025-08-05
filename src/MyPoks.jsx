import {useLoaderData} from "react-router-dom";


const MyPoks = () => {
    const poks = useLoaderData()

    return (
        <>
            {poks.map((pok) => {
                return (
                    <div key={pok.id}>
                        <div id="headerPok">
                            <div><img style={{width: "200px", height: "200px", borderRadius: "20px"}} src={pok.avatar} alt={pok.name}/></div>
                            <div style={{marginLeft: "15px"}}><h2>{pok.name}</h2></div>
                        </div>
                        <h3>Base</h3>
                        <span>Defense:
                            {pok.defense}, HP:
                            {pok.HP}, Speed:
                            {pok.HP}</span>
                        <p>Type: {pok.type}</p>
                        <div>Profile: Egg:
                            {pok.egg}, Height:
                            {pok.height}, Weight:
                            {pok.weight}</div>
                        <h4>Description: {pok.description}</h4>
                    </div>
                )
            })}
        </>
    )
}

export default MyPoks