import React from "react";

function HogDetails({specialty, medal, greased, weight}) {
    return (
    <ul>
        <li>{specialty}</li>
        <li>{`${greased}`}</li>
        <li>{medal}</li>
        <li>{weight}</li>
    </ul>
    )
}

export default HogDetails;