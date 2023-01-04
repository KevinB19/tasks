import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Dragon Boat Festival: 🎏"
    | "Halloween: 🎃"
    | "Diwali: 🪔"
    | "Fourth of July: 🎆"
    | "Christmas: 🎄";

const holidays: Holiday[] = [
    "Dragon Boat Festival: 🎏",
    "Halloween: 🎃",
    "Diwali: 🪔",
    "Fourth of July: 🎆",
    "Christmas: 🎄"
];

const alphabeticalNextHoliday = (currentHoliday: Holiday): Holiday => {
    const currentIndex = holidays.indexOf(currentHoliday);
    if (currentIndex === holidays.length - 1) {
        return holidays[0];
    } else {
        return holidays[currentIndex + 1];
    }
};

const chronologicalNextHoliday = (currentHoliday: Holiday): Holiday => {
    const currentIndex = holidays.indexOf(currentHoliday);
    if (currentIndex === 0) {
        return holidays[holidays.length - 1];
    } else {
        return holidays[currentIndex - 1];
    }
};

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        "Dragon Boat Festival: 🎏"
    );
    const handleAlphabetButtonClick = () => {
        setCurrentHoliday(alphabeticalNextHoliday(currentHoliday));
    };

    const handleYearButtonClick = () => {
        setCurrentHoliday(chronologicalNextHoliday(currentHoliday));
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={handleAlphabetButtonClick}>
                Advance by Alphabet
            </Button>
            <Button onClick={handleYearButtonClick}>Advance by Year</Button>
        </div>
    );
}
