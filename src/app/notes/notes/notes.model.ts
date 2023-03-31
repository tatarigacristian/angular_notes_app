export type Note = {
    id: string,
    title: string | undefined,
    description: string | undefined,
}

export class NoteClass {
    constructor(
        public id: string,
        public title: string | undefined,
        public description: string | undefined,
    ) {}
}