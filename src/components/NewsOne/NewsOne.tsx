import { FC, useState, useEffect } from 'react';
import { getShowStory } from '../../api/api';
import { Title, Text, Footnote } from '@vkontakte/vkui';
import { NewsOneProps } from '../../types/NewsOneProps/NewsOneProps';
import styles from './NewsOne.module.css';
import { DateTime } from '../DateTime/DateTime';

export const NewsOne: FC<NewsOneProps> = ({ newsId }) => {
    const initialState = {
        title: '',
        score: 0,
        by: '',
        time: new Date(),
    };
    const [newsOne, setNewsOne] = useState(initialState);

    useEffect(() => {
        getShowStory(newsId).then((data) => {
            if (data && data.url) {
                setNewsOne(data);
            }
        });
    }, []);
    const { title, score, by, time } = newsOne;
    const month = new Date(time).getMonth();
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
        `${new Date(time).getDate()}` +
        ' ' +
        `${monthNames[month]}` +
        ' ' +
        `${new Date(time).getFullYear()}`;
    return (
        newsOne && (
            <div className={styles.wrapper__div} onClick={() => {}}>
                <Title level="3" weight="2" style={{ marginBottom: 16 }}>
                    {title}
                    <Text>Рейтинг: {score}</Text>
                    <Footnote weight="1">
                        Ник автора: {by.toUpperCase()}
                    </Footnote>
                    <DateTime>
                        <span>
                            Дата публикации:{''} {`${myTime}`}
                        </span>
                    </DateTime>
                </Title>
            </div>
        )
    );
};
