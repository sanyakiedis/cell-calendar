export interface Day {
    day: number;
    month: number;
}

export interface Data {
    date: string;
    all: number;
    done: number;
}

export interface Cell extends Day {
    percent: number;
}
