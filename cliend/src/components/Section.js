import React, { Component } from 'react'
import Products from './section/Products'
import Details from './section/Details'
import Details_01 from './section/Details-01'
import Cart from './section/Carts'
import Payment from './section/Payment'
import Home from './section/Home'
import Login from './Login'
import { Route } from "react-router-dom";
import { useEffect, useState } from "react";

function Sections() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = () => {
            fetch("http://localhost:5000/auth/login/success", {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
                .then((response) => {
                    if (response.status === 200) return response.json();
                    throw new Error("authentication has been failed!");
                })
                .then((resObject) => {
                    setUser(resObject.user);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        getUser();
    }, [])
    //     return (
    //         <section>
    //             {/* <Routes> */}
    //             <Route path="/" element={Home} exact />
    //             <Route path="/product" element={Products} exact />
    //             <Route path="/product/:id" element={Details} />
    //             <Route path="/product/:id" element={Details_01} exact />
    //             <Route path="/cart" element={Cart} />
    //             <Route path="/login" element={Login} />
    //             <Route path="/payment" element={Payment} />
    //             {/* <Route
    //                 path="/login"
    //                 element={user ? <Route to="/" /> : <Login />}
    //             /> */}
    //             {/* <Route
    //                 path="/post/:id"
    //                 element={user ? <Home /> : <Route to="/login" />}
    //             /> */}
    //             {/* </Routes> */}
    //         </section>
    //     )
}
export class Section extends Component {
    render() {
        return (
            <section>
                <Route path="/" component={Home} exact />
                <Route path="/product" component={Products} exact />
                <Route path="/product/:id" component={Details} />
                <Route path="/product/:id" component={Details_01} exact />
                <Route path="/cart" component={Cart} />
                <Route path="/login" component={Login} />
                <Route
                    path="/login"
                    element={Sections.user ? <Route to="/" /> : <Login />}
                />
                <Route
                    path="/post/:id"
                    element={Sections.user ? <Home /> : <Route to="/login" />}
                />
                <Route path="/payment" component={Payment} />
            </section>
        )
    }
}
export default Section