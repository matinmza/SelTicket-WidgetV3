import { format } from 'date-fns';
import { toJalaali, toGregorian } from 'jalaali-js';

const days = ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنج شنبه', 'جمعه', 'شنبه'];

export const dateRangeGenerator = (startDate: Date, endDate: Date, jalali = true, steps = 1) => {
    const dateArray = [];
    const currentDate = startDate;

    while (currentDate <= endDate) {
        const d = currentDate;
        const { jy, jm, jd } = toJalaali(d);

        const day = jalali ? `${jy}/${jm}/${jd}` : format(d, 'yyyy/MM/dd');
        const name = jalali ? days[d.getDay()] : format(d, 'EEEE');

        dateArray.push({
            day,
            name,
            jalali,
        });

        currentDate.setDate(currentDate.getDate() + steps);
    }

    return dateArray;
};

export const toJsdate = (year: number, month: number, day: number, jalali: boolean) => {
    let date: Date;

    if (jalali) {
        const { gy, gm, gd } = toGregorian(year, month, day);
        date = new Date(gy, gm - 1, gd);
    } else {
        date = new Date(year, month, day);
    }

    return date;
};

export const sameDay = (d1: Date, d2: Date) =>
    d1.getFullYear() === d2.getFullYear() &&
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth();

export const toNormalDate = (d: Date, lang: string) => {
    const language = lang === 'fa' ? 'fa-IR' : 'en-US';
    return new Intl.DateTimeFormat(language).format(d);
};
