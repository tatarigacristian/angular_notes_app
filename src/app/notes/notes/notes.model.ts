export type Note = {
    id: number,
    title: string,
    description: string,
}

export class NoteClass {
    constructor(
        public id: number,
        public title: string,
        public description: string,
    ) {}
}