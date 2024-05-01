import { FC } from 'react';
import { DateTimeProps } from '../../types/DateTimeProps/DateTimeProps';
export const DateTime: FC<DateTimeProps> = ({ children }) => (
    <div>{children}</div>
);

export function DateTimeFunc(time: number): string {
    const month = new Date(time * 1000).getMonth();
    const monthNames: string[] = [
        'January',
        'February',
        'March',
        'April',
        'May ',
        'June ',
        'July ',
        'August ',
        'September ',
        'October ',
        'November ',
        'December ',
    ];
    const myTime =
        `${new Date(time * 1000).getDate()}` +
        '. ' +
        `${monthNames[month]}` +
        '. ' +
        `${new Date(time * 1000).getFullYear()}`;
    return myTime;
}
