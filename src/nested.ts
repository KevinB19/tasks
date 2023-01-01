/* eslint-disable prettier/prettier */
import { Z_ASCII } from "zlib";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    return questions.filter((x) => x.published);
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const q1: Question[] = questions.filter((x) => {
        if (x.body != "" || x.expected != "" || x.options.length != 0) {
            return x;
        }
    });
    return q1;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead. stupid fucking question ill fix it later it's technichally right fuck this
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question[] | null {
    const q2: Question[] = questions.filter((x) => {
        if (x.id == id) {
            return x;
        } else {
            return null;
        }
    });
    return q2;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const q3: Question[] = questions.filter((x) => {
        if (x.id != id) {
            return x;
        }
    });
    return q3;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const q4 = questions.map((q4: Question): string => q4.name);
    return q4;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    // eslint-disable-next-line no-var
    var totalPoints = 0;
    // eslint-disable-next-line no-var
    for (var i = 0; i < questions.length; i++) {
        totalPoints += questions[i].points;
    }
    return totalPoints;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let total = 0;
    for (const question of questions) {
        if (question.published) {
            total += question.points;
        }
    }
    return total;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    let csvString = `id,name,options,points,published\n`;
    questions.forEach((question) => {
        csvString += `${question.id},${question.name},${question.options.length},${question.points},${question.published}\n`;
    });
    return csvString;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers: Answer[] = [];
    for (const question of questions) {
        const answer: Answer = {
            questionId: question.id,
            correct: false,
            text: "",
            submitted: false
        };
        answers.push(answer);
    }
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    return questions.map((question) => ({
        ...question,
        published: true
    }));
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }

    const firstType = questions[0].type;
    return questions.every((question) => question.type === firstType);
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQuestion = makeBlankQuestion(id, name, type);
    return [...questions, newQuestion];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    return questions.map((question) => {
        if (question.id === targetId) {
            return { ...question, name: newName };
        }
        return question;
    });
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    return questions.map((q) => {
        if (q.id !== targetId) {
            return q;
        }
        return {
            ...q,
            type: newQuestionType,
            options:
                newQuestionType === "multiple_choice_question" ? q.options : []
        };
    });
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    return questions.map((q) => {
        if (q.id !== targetId || q.type !== "multiple_choice_question") {
            return q;
        }
        const options = q.options.slice();
        if (targetOptionIndex === -1) {
            options.push(newOption);
        } else {
            options[targetOptionIndex] = newOption;
        }
        return {
            ...q,
            options
        };
    });
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const result: Question[] = [];
    for (const q of questions) {
        result.push(q);
        if (q.id === targetId) {
            result.push(duplicateQuestion(q, newId));
        }
    }
    return result;
}
