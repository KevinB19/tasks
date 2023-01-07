import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");
    let result;
    if (userAnswer === expectedAnswer) {
        result = <span>✔️</span>;
    } else {
        result = <span>❌</span>;
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
            />
            {result}
        </div>
    );
}
