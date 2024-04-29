import { FC, useState, useEffect } from 'react';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Button } from '@vkontakte/vkui';

import { useAppSelector } from '../../redux/hooks/hooks';
export const NewsStoryPage: FC = () => {
    const routeNavigator = useRouteNavigator();
    const ItemId = useAppSelector((state) => state.newsOne.listId);
    console.log(ItemId);

    const [data, setData] = useState([]);
    const fetchData = () => {
        fetch(
            ` https://hacker-news.firebaseio.com/v0/item/` +
                `${JSON.stringify(ItemId)}` +
                `.json`
        )
            .then((response) => response.json())
            .then((news) => setData(news));
    };

    useEffect(() => {
        fetchData();
    }, []);
    console.log(data, data);

    return (
        <>
            <Button onClick={() => routeNavigator.push('/')}>
                Назад к списку новостей
            </Button>
        </>
    );
};
