import { Form, useLoaderData } from "react-router-dom";
import axios from "axios";
import {useState} from "react";

export async function loader() {
    const resp = await axios.get("https://6828a9996075e87073a48b20.mockapi.io/MyPokemons")

    return resp.data
}

export default function EditPokemon() {
    const [response, setResponse] = useState('');

    const [obj, setObj] = useState({
        name: "",
        defense: "",
        HP: "",
        speed: "",
        type: "",
        egg: "",
        height: "",
        weight: "",
        description: "",
        avatar: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        axios.post('https://6828a9996075e87073a48b20.mockapi.io/MyPokemons', obj)
            .then((resp) => {setResponse(resp.data)})
            .catch((error) => console.log(error));

    }

    function updateValue(value, name) {
        setObj({...obj, [name]: value});
    }

    return (
        <div>
            <Form method="post" id="contact-form" onSubmit={handleSubmit}>
                <p>
                    <span>Name</span>
                    <input
                        placeholder="Pikachu"
                        aria-label="Name"
                        type="text"
                        name="name"
                        value={obj.name}
                        onChange={(e) => updateValue(e.target.value, e.target.name)}
                    />
                </p>
                <label>
                    <span>Avatar</span>
                    <input
                        type="text"
                        name="avatar"
                        placeholder="https://example.com/avatar.jpg"
                        value={obj.avatar}
                        onChange={(e) => updateValue(e.target.value, e.target.name)}
                    />
                </label>
                <label>
                    <span>Defense</span>
                    <input
                        type="text"
                        name="defense"
                        placeholder="50"
                        value={obj.defense}
                        onChange={(e) => updateValue(e.target.value, e.target.name)}
                    />
                </label>
                <label>
                    <span>HP</span>
                    <input
                        type="text"
                        name="HP"
                        placeholder="100"
                        value={obj.HP}
                        onChange={(e) => updateValue(e.target.value, e.target.name)}
                    />
                </label>
                <label>
                    <span>Speed</span>
                    <input
                        type="text"
                        name="speed"
                        placeholder="40"
                        value={obj.speed}
                        onChange={(e) => updateValue(e.target.value, e.target.name)}
                    />
                </label>
                <label>
                    <span>Type</span>
                    <input
                        type="text"
                        name="type"
                        placeholder="Seed"
                        value={obj.type}
                        onChange={(e) => updateValue(e.target.value, e.target.name)}
                    />
                </label>
                <label>
                    <span>Egg</span>
                    <input
                        type="text"
                        name="egg"
                        placeholder="Monster"
                        value={obj.egg}
                        onChange={(e) => updateValue(e.target.value, e.target.name)}
                    />
                </label>
                <label>
                    <span>Height</span>
                    <input
                        type="text"
                        name="height"
                        placeholder="1m"
                        value={obj.height}
                        onChange={(e) => updateValue(e.target.value, e.target.name)}
                    />
                </label>
                <label>
                    <span>Weight</span>
                    <input
                        type="text"
                        name="weight"
                        placeholder="13kg"
                        value={obj.weight}
                        onChange={(e) => updateValue(e.target.value, e.target.name)}
                    />
                </label>
                <label>
                    <span>Description</span>
                    <input
                        type="text"
                        name="description"
                        placeholder="An amazing pokemon pikatchu."
                        value={obj.description}
                        onChange={(e) => updateValue(e.target.value, e.target.name)}
                    />
                </label>
                <p>
                    <button type="submit">Save</button>
                    {response && (<span style={{marginLeft: "10px"}}>Данные успешно отправлены: {response.name}</span>)}
                </p>
            </Form>
        </div>
    );
}
