import {AbstractControl} from "@angular/forms";
import {Note} from "../notes/notes/notes.model";

export function selectColors(n: number, colors: string[]): string[] {
    const colorsCopy = shuffle(colors);
    const selectedColors: string[] = [];
    const numColors = colorsCopy.length;

    for (let i = 0; i < n; i++) {
        const index = i % numColors;
        const color = colorsCopy[index];
        selectedColors.push(color);
    }

    return selectedColors;
}

export function shuffle(array: any[]) {
    return array.sort(() => 0.5 - Math.random());
}

export function isInputInvalid(input: AbstractControl | null, isSubmitted: boolean): boolean {
    if(!input){
        return false;
    }
    return input.invalid && (input.dirty || input.touched || isSubmitted);
}

export function isInputError(input: AbstractControl | null, error: string, isSubmitted: boolean): boolean {
    if(!input){
        return false;
    }
    return input.hasError(error) && (input.dirty || input.touched || isSubmitted);
}

export function generateUniqueId(): string {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 10000);
    return `${timestamp}-${random}`;
}

export function saveNoteToLocalStorage(note: Note): void {
    const notes: Note[] = JSON.parse(localStorage.getItem('notes') || '[]');
    console.log(notes);
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
}

export function getNotesFromLocalStorage(): Note[] {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    return notes.reverse();
}