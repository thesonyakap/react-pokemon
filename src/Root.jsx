import {Outlet, Link, NavLink, useLoaderData, useNavigation, Form} from "react-router-dom";
import {useState} from "react";
import {getPokemons, createPokemons} from "./Contacts.jsx";

export async function action() {
    const pekemon= await createPokemons();
    return pekemon;
}

export async function loader({request}) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const pokemons = await getPokemons(q)
    return pokemons
}

export default function Root() {
    const [data, setData] = useState("");
    const [pok, setPok] = useState(null);

    const trans = data.toLowerCase()

    const pokemons= useLoaderData()
    const navigation = useNavigation()


    console.log(pok)

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has("q")

    return (
        <>
            <div id="sidebar">
                <h1>Pokemons</h1>
                <div>
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            className={searching ? "loading" : ""}
                            aria-label="Search pokemons"
                            placeholder="Search"
                            type="search"
                            name="q"
                            onChange={(event) => {
                                setData(event.target.value)
                            }}
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={!searching}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </Form>
                    <Form method="post">
                        <NavLink to={"pokemon/edit"}><button type="submit">New</button></NavLink>
                    </Form>
                </div>
                <div id="ownpok">
                    <NavLink to={`pokemon/my`} className={({isActive, isPending}) =>
                        isActive
                            ? "active"
                            : isPending
                                ? "pending"
                                : ""}><span>My pokemons</span></NavLink>
                </div>
                <nav>
                    <ul>
                        {pokemons.map((item) => {
                            if (!data) {
                                return <li key={item.id}>
                                    <NavLink to={`pokemon/${item.id}`}
                                             className={({isActive, isPending}) =>
                                                 isActive
                                                     ? "active"
                                                     : isPending
                                                         ? "pending"
                                                         : ""
                                             }>
                                        {item.name.english}</NavLink>
                                </li>
                            }
                            else if (item.name.english.includes(data) || item.name.english.includes(data[0].toUpperCase())) {
                                    return <li key={item.id}>
                                        <NavLink to={`pokemon/${item.id}`}
                                                 className={({isActive, isPending}) =>
                                                     isActive
                                                         ? "active"
                                                         : isPending
                                                             ? "pending"
                                                             : ""
                                                 }>
                                            {item.name.english}</NavLink>
                                    </li>
                                }
                            else {
                                return <li key={item.id}>

                                </li>
                            }

                        })}

                    </ul>
                </nav>
            </div>
            <div id="detail" className={
                navigation.state === "loading" ? "loading" : ""
            }>
                <Outlet />
            </div>
        </>
    );
}
