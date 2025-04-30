
const abbreviatedMonths: string[] = [
    'JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'
]
export function toAbbreviatedMonth(date: Date): string { 
    return abbreviatedMonths[date.getMonth()];
}

export function toAbbreviatedDate(date: Date): string {
    return `${toAbbreviatedMonth(date)} ${date.getDate().toString()}`;
};

export function toMinutes(lengthInSeconds: number): string { 
    return `${Math.floor(lengthInSeconds / 60).toString()} MIN`;
}