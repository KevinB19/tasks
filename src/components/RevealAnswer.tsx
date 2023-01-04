import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [answerVisible, setAnswerVisible] = useState(false);
    return (
        <div>
            {answerVisible && <div>42</div>}
            <Button onClick={() => setAnswerVisible(!answerVisible)}>
                Reveal Answer
            </Button>
        </div>
    );
}
