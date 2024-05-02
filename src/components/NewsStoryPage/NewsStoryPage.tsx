import { FC, useState, useEffect } from 'react';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { Button, Div, Link } from '@vkontakte/vkui';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import { getShowStory } from '../../api/api';
import { Title, Text, Footnote } from '@vkontakte/vkui';
import styles from './NewsStoryPage.module.css';
import { DateTime, DateTimeFunc } from '../DateTime/DateTime';
import { Comments } from '../Comments/Comments';
import { getIdComment } from '../../redux/features/comment/commentSlice';
import { NewCommentsUpdate } from '../NewCommentsUpdate/NewCommentsUpdate';

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
    const [textShow, setTextShow] = useState(false);

    const str = ItemId.toString();
    useEffect(() => {
        getShowStory(str).then((data) => {
            if (data && data.url) {
                setData(data);
            }
        });
    }, []);

    const { url, title, by, descendants, time, kids } = data;

    const dispatch = useAppDispatch();
    const [newValueComments, setNewValueComments] = useState(false);
    let textShowComment = 'Нет новых комментариев';
    const handeClick = () => {
        if (descendants === 0 || descendants === 1) {
            setTextShow(!textShow);
            return textShowComment;
        } else {
            dispatch(getIdComment(kids));
            setNewValueComments(!newValueComments);
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
                    {textShow && (
                        <p className={styles.commentsText__p_dropdown}>
                            {textShowComment}
                        </p>
                    )}
                    {newValueComments ? (
                        <>
                            <Div>
                                <NewCommentsUpdate comments={kids} />
                            </Div>
                        </>
                    ) : (
                        <Div>{kids && <Comments comments={kids} />}</Div>
                    )}
                </Div>
                <Button onClick={() => routeNavigator.push('/')}>
                    Назад к списку новостей
                </Button>
            </div>
        )
    );
};
