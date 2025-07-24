import {Outlet, Link, NavLink, useLoaderData, useNavigation, Form, useSubmit} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {getPokemons} from "./Contacts.jsx";

export async function loader({request}) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const pokemons = await getPokemons(q)
    // console.log({pokemons})
    return pokemons
}

export default function Root() {
    const [data, setData] = useState("");

    const pokemons= useLoaderData()
    const navigation = useNavigation()
    const submit = useSubmit()

    console.log(data)

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has("q")

    // useEffect(() => {
    //     document.getElementById("q").value=q
    // }, [q]);

    // console.log(pokemons)
    // useEffect(() => {
    //     axios.get("https://6828a9996075e87073a48b20.mockapi.io/Tasks")
    //         .then((response) => setData(response.data))
    //         .catch((error) => console.log(error))
    // }, [])
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
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
                                const isFirstSearch = q == null;
                                submit(event.currentTarget.form, {
                                    replace: !isFirstSearch,
                                })
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
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
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
                            else if (item.name.english.includes(data)) {
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
