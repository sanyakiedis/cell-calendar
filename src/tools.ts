import * as API from '@/api';

export function getData(data: API.Data[], month: number, year: number, sundayFirst: boolean = false): API.Cell[][] {
    const days: API.Day[] = monthDays(month, year, sundayFirst);

    const startDate: number = parseInt(year + month + '00', 0);
    const endDate: number = parseInt(year + month + '32', 0);

    data = data
        .filter((i) => dateToInt(i.date) > startDate && dateToInt(i.date) < endDate)
        .sort((a, b) => dateToInt(a.date) - dateToInt(b.date));

    return separateWeeks(
        days.map((day) => {
            const tracker: API.Data | undefined =
                data.find((i) => i.date === `${year}-${toTwoDigits(day.month)}-${toTwoDigits(day.day)}`);
            return {
                ...day,
                percent: tracker ? tracker.done / tracker.all * 100 : 0,
            };
        }));
}

export function monthDays(month: number, year: number, sundayFirst: boolean): API.Day[] {
    const days: API.Day[] = [];
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

    return days;
}

export function separateWeeks(days: API.Cell[]): API.Cell[][] {
    const weeks: API.Cell[][] = [];
    while (days.length) {
        weeks.push(days.splice(0, 7));
    }
    return weeks;
}

export function dateToInt(s: string): number {
    return parseInt(s.replace(/-/g, ''), 0);
}

export function toTwoDigits(v: string | number): string {
    return v < 10 ? `0${v}` : v.toString();
}
