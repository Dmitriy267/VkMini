import { FC, useState, useEffect } from 'react';
import { getShowStory } from '../../api/api';
import { Title, Text, Footnote } from '@vkontakte/vkui';
import { NewsOneProps } from '../../types/NewsOneProps/NewsOneProps';
import styles from './NewsOne.module.css';
import { DateTime, DateTimeFunc } from '../DateTime/DateTime';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { ShowNewsId } from '../../redux/features/newsOne/newsOneSlice';

const initialState = {
    title: '',
    score: 0,
    by: '',
    time: 0,
    id: 0,
};
export const NewsOne: FC<NewsOneProps> = ({ newsId }) => {
    const [newsOne, setNewsOne] = useState(initialState);

    const routeNavigator = useRouteNavigator();
    const dispatch = useAppDispatch();
    useEffect(() => {
        getShowStory(newsId).then((data) => {
            if (data && data.url) {
                setNewsOne(data);
            }
        });
    }, []);
    const { title, score, by, time, id } = newsOne;

    return (
        newsOne && (
            <>
                <div
                    className={styles.wrapper__div}
                    onClick={() => {
                        routeNavigator.push('/newsStoryPage');

                        dispatch(ShowNewsId(id));
                    }}
                >
                    <Title level="3" weight="2" style={{ marginBottom: 16 }}>
                        {title}
                        <Text>Рейтинг: {score}</Text>
                        <Footnote weight="1">
                            Ник автора: {by.toUpperCase()}
                        </Footnote>
                        <DateTime>
                            <span>
                                Дата публикации:{''} {DateTimeFunc(time)}
                            </span>
                        </DateTime>
                    </Title>
                </div>
            </>
        )
    );
};
