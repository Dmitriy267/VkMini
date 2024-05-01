import { FC, useState, useEffect } from 'react';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Button, Div, Link } from '@vkontakte/vkui';
import { useAppSelector } from '../../redux/hooks/hooks';
import { getShowStory } from '../../api/api';
import { Title, Text, Footnote } from '@vkontakte/vkui';
import styles from './NewsStoryPage.module.css';
import { DateTime, DateTimeFunc } from '../DateTime/DateTime';
import { Comments } from '../Comments/Comments';

const initialState = {
    title: '',
    url: '',
    time: 0,
    by: '',
    descendants: 0,
    kids: [],
    id: 0,
};
export const NewsStoryPage: FC = () => {
    const routeNavigator = useRouteNavigator();
    const ItemId = useAppSelector((state) => state.newsOne.listId);

    const [data, setData] = useState(initialState);

    const str = ItemId.toString();
    useEffect(() => {
        getShowStory(str).then((data) => {
            if (data && data.url) {
                setData(data);
            }
        });
    }, []);

    const { url, title, by, descendants, time, kids } = data;

    const handeClick = () => {
        if (kids) {
            if (kids.length === 0) {
                return null;
            }
        }
    };
    return (
        data && (
            <div className={styles.wrapper__div}>
                {' '}
                <Title level="1" style={{ marginBottom: 16 }}>
                    {title}
                </Title>
                <Text weight="1">
                    {' '}
                    Ссылка на новость: {''}
                    <Link href={url} target="_blank">
                        {url}
                    </Link>
                </Text>
                <Footnote weight="1">Автор: {by.toUpperCase()}</Footnote>
                <Footnote weight="1">Комментариев: {descendants}</Footnote>
                <DateTime>
                    <span>
                        Дата публикации:{''} {DateTimeFunc(time)}
                    </span>
                </DateTime>
                <Div>
                    <Button onClick={handeClick}>Обновить комментарии</Button>
                </Div>
                <Div>{kids && <Comments comments={kids} />}</Div>
                <Button onClick={() => routeNavigator.push('/')}>
                    Назад к списку новостей
                </Button>
            </div>
        )
    );
};
