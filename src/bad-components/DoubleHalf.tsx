import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function DoubleHalf(): JSX.Element {
    const [dhVal, setDhVal] = useState(10);

    function Doubler(): JSX.Element {
        return <Button onClick={() => setDhVal(2 * dhVal)}>Double</Button>;
    }

    function Halver(): JSX.Element {
        return <Button onClick={() => setDhVal(0.5 * dhVal)}>Halve</Button>;
    }

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhVal}</span>
            </div>
            <Doubler></Doubler>
            <Halver></Halver>
        </div>
    );
}
