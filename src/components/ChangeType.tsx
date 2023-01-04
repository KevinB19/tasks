import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [questionType, setQuestionType] = useState<QuestionType>(
        "short_answer_question"
    );

    function handleTypeChange() {
        if (questionType === "short_answer_question") {
            setQuestionType("multiple_choice_question");
        } else {
            setQuestionType("short_answer_question");
        }
    }

    return (
        <div>
            {questionType === "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
            <Button onClick={handleTypeChange}>Change Type</Button>
        </div>
    );
}
