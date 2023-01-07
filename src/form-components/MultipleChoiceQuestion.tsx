import React, { useState } from "react";

export function MultipleChoiceQuestion(props: {
    expectedAnswer: string;
    options: string[];
}): JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(
        props.options[0]
    );
    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <form>
                <select name="color" onChange={handleOptionChange}>
                    {props.options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </form>
            <div
                data-testid="colored-box"
                style={{
                    color: selectedOption,
                    backgroundColor: selectedOption
                }}
            >
                {selectedOption === props.expectedAnswer ? "✔️" : "❌"}
            </div>
        </div>
    );
}
