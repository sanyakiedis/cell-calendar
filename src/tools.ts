export interface Cell {
    day: number;
    month: number;
}

export function monthWeeks(month: number, year: number, sundayFirst: boolean = false): Cell[][] {
    const result: Cell[][] = [];
    const days: Cell[] = [];
    let firstDay: Date = new Date(`${month} 01 ${year}`);
    let offset: number = firstDay.getDay();

    if (!sundayFirst) {
        offset = offset === 0 ? 6 : offset - 1;
    }

    while (offset--) {
        firstDay.setDate(firstDay.getDate() - 1);
        days.unshift({
            day: firstDay.getDate(),
            month: firstDay.getMonth() + 1,
        });
    }

    firstDay = new Date(`${month} 01 ${year}`);

    while (firstDay.getMonth() === month - 1 || firstDay.getDay() !== (sundayFirst ? 0 : 1)) {
        days.push({
            day: firstDay.getDate(),
            month: firstDay.getMonth() + 1,
        });
        firstDay.setDate(firstDay.getDate() + 1);
    }

    while (days.length) {
        result.push(days.splice(0, 7));
    }

    return result;
}
