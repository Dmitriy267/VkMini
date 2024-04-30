import { FC, useState, useEffect } from 'react';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Button, Div, Link } from '@vkontakte/vkui';
import { useAppSelector } from '../../redux/hooks/hooks';
import { getShowStory } from '../../api/api';
import { Title, Text, Footnote } from '@vkontakte/vkui';
import styles from './NewsStoryPage.module.css';
import { DateTime } from '../DateTime/DateTime';
import { Comments } from '../Comments/Comments';
const initialState = {
    title: '',
    url: '',
    time: 0,
    by: '',
    descendants: 0,
    kids: [],
};
export const NewsStoryPage: FC = () => {
    const routeNavigator = useRouteNavigator();
    const ItemId = useAppSelector((state) => state.newsOne.listId);
    console.log(`ItemId`, ItemId);

    const [data, setData] = useState(initialState);

    //     const fetchData = () => {
    //         fetch(
    //             ` https://hacker-news.firebaseio.com/v0/item/` +
    //                 `${JSON.stringify(ItemId)}` +
    //                 `.json`
    //         )
    //             .then((response) => response.json())
    //             .then((news) => setData(news));
    //     };

    //     useEffect(() => {
    //         fetchData();
    //     }, []);
    //     console.log(data, data);
    // const {} =data
    const str = ItemId.toString();
    useEffect(() => {
        getShowStory(str).then((data) => {
            if (data && data.url) {
                setData(data);
            }
        });
    }, []);
    console.log(`data`, data);
    const { url, title, by, descendants, time, kids } = data;
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
                        Дата публикации:{''} {`${myTime}`}
                    </span>
                </DateTime>
                <Div>{kids && <Comments comments={kids} />}</Div>
                <Button onClick={() => routeNavigator.push('/')}>
                    Назад к списку новостей
                </Button>
            </div>
        )
    );
};
