import { FC } from 'react';
import { useGetNewsStoriesQuery } from '../../redux/services/news';
import { NewsOne } from '../NewsOne/NewsOne';
import { News } from '../../types/News/News';

export const NewsPage: FC<News> = () => {
    const { data, error, isLoading } =
        useGetNewsStoriesQuery('/topstories.json');

    return (
        <>
            {error ? <p>Ошибка запроса</p> : isLoading && <p>Loading</p>}

            {data &&
                data
                    .slice(400, 500)
                    .map((newsId: any, i: number) => (
                        <NewsOne key={i} newsId={newsId} />
                    ))}
        </>
    );
};
