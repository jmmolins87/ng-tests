


export class Task {
    title: string;
    description: string;
    isCompleted: boolean;

    constructor( cTitle: string, cDescription: string, cIsCompleted: boolean ) {
        this.title = cTitle;
        this.description = cDescription;
        this.isCompleted = cIsCompleted
    }
}