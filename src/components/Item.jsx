import React from "react";
import { Link } from "react-router-dom";

export default function Item({ item }) {
    return (
        <div style={{ border: "2px solid #F9B8DB", margin: "10px" }} key={item.id}>
            {JSON.stringify(item)}
            <Link to={"/item/" + item.id}>IR AL PRODUCTO</Link>
            <br />
            <br />
        </div>
    );
}