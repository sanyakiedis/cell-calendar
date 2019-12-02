export function monthWeeks(month: number, year: number, sundayFirst: boolean = false): number[][] {
    const result: number[][] = [];
    const days: number[] = [];
    const firstDay: Date = new Date(`${month} 01 ${year}`);
    let offset: number = firstDay.getDay();

    if (!sundayFirst) {
        offset = offset === 0 ? 6 : offset - 1;
    }


    while (offset--) {
        days.push(0); // TODO: write last month days here
    }

    while (firstDay.getMonth() === month - 1) {
        days.push(firstDay.getDate());
        firstDay.setDate(firstDay.getDate() + 1);
    }

    while (firstDay.getDay() !== (sundayFirst ? 0 : 1)) {
        days.push(0); // TODO: write next month days here
        firstDay.setDate(firstDay.getDate() + 1);
    }

    while (days.length) {
        result.push(days.splice(0, 7));
    }

    return result;
}
