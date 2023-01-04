import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState(4);
    const [quizInProgress, setQuizInProgress] = useState(false);

    const handleStartQuiz = () => {
        setAttempts(attempts - 1);
        setQuizInProgress(true);
    };

    const handleStopQuiz = () => {
        setQuizInProgress(false);
    };

    const handleMulligan = () => {
        setAttempts(attempts + 1);
    };

    return (
        <div>
            <p>Attempts: {attempts}</p>
            <Button
                onClick={handleStartQuiz}
                disabled={attempts === 0 || quizInProgress}
            >
                Start Quiz
            </Button>
            <Button onClick={handleStopQuiz} disabled={!quizInProgress}>
                Stop Quiz
            </Button>
            <Button onClick={handleMulligan} disabled={quizInProgress}>
                Mulligan
            </Button>
        </div>
    );
}
