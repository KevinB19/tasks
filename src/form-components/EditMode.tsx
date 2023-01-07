import React, { useState } from "react";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            {editMode ? (
                <form>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <br />
                    <label htmlFor="student">
                        Student:
                        <input
                            type="checkbox"
                            id="student"
                            checked={isStudent}
                            onChange={(event) =>
                                setIsStudent(event.target.checked)
                            }
                        />
                    </label>
                </form>
            ) : (
                <div>
                    <h3>
                        {name} is {isStudent ? "a student" : "not a student"}
                    </h3>
                </div>
            )}
            <label htmlFor="edit-mode-switch">
                Edit Mode:
                <input
                    type="checkbox"
                    id="edit-mode-switch"
                    checked={editMode}
                    onChange={(event) => setEditMode(event.target.checked)}
                    className="form-switch"
                />
            </label>
        </div>
    );
}
