import { Div, Text } from '@vkontakte/vkui';
import { FC, useEffect, useState } from 'react';
import { getComment } from '../../api/api';
import { useAppSelector } from '../../redux/hooks/hooks';

import { Comments } from '../Comments/Comments';
import styles from './CommentUpdate.module.css';

const initialCommitState = {
    text: '',
    kids: [],
    id: 0,
};
export const CommentUpdate: FC = () => {
    const [comment, setComment] = useState(initialCommitState);
    const [list, setList] = useState(false);

    const label = 'Показать скрытый комментарий';
    const newCommit = useAppSelector((state) => state.comment.kids);
    useEffect(() => {
        getComment(Random(newCommit)).then((data) => {
            if (data) {
                setComment(data);
            }
        });
    }, []);

    const { text, kids } = comment;

    const handleClick = () => {
        setList(!list);
    };
    return (
        <>
            {comment && (
                <>
                    <Div>
                        {' '}
                        <Text weight="3">{text}</Text>
                    </Div>
                    {kids && (
                        <>
                            <Div
                                onClick={handleClick}
                                className={styles.comment__div_dropdown}
                            >
                                <span>{label}</span>
                            </Div>
                            <ul className={styles.comment__ul_decoration}>
                                {list && <Comments comments={kids} />}
                            </ul>
                        </>
                    )}
                </>
            )}
        </>
    );
};

function Random(arr: number[]): string {
    const random = Math.floor(Math.random() * arr.length);
    let num = arr[random];

    return num.toString();
}
