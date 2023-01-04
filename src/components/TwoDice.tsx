import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState(d6());
    const [rightDie, setRightDie] = useState(d6());

    const handleRollLeft = () => {
        setLeftDie(d6());
    };

    const handleRollRight = () => {
        setRightDie(d6());
    };

    return (
        <div>
            <div data-testid="left-die">{leftDie}</div>
            <div data-testid="right-die">{rightDie}</div>
            <Button onClick={handleRollLeft}>Roll Left</Button>
            <Button onClick={handleRollRight}>Roll Right</Button>
            {leftDie === rightDie && <div>Win</div>}
            {leftDie === 1 && rightDie === 1 && <div>Lose</div>}
        </div>
    );
}
