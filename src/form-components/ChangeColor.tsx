import React, { useState } from "react";

const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "pink"
];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState("");

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <label key={color}>
                    <input
                        type="radio"
                        value={color}
                        checked={selectedColor === color}
                        onChange={handleColorChange}
                    />
                    {color}
                </label>
            ))}
            <div
                data-testid="colored-box"
                style={{ backgroundColor: selectedColor }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
