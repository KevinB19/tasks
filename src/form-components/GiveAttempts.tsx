import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleUse = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGain = () => {
        const parsedRequestedAttempts = parseInt(requestedAttempts, 10);
        if (!isNaN(parsedRequestedAttempts)) {
            setAttemptsLeft(attemptsLeft + parsedRequestedAttempts);
            setRequestedAttempts("");
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {attemptsLeft}</div>
            <div>
                <input
                    type="number"
                    value={requestedAttempts}
                    onChange={(e) => setRequestedAttempts(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleUse} disabled={attemptsLeft === 0}>
                    Use
                </button>
                <button onClick={handleGain}>Gain</button>
            </div>
        </div>
    );
}
