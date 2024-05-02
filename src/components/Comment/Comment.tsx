import { Div, Text } from '@vkontakte/vkui';
import { FC, useEffect, useState } from 'react';
import { getComment } from '../../api/api';
import { CommentProps } from '../../types/CommentProps/CommentProps';
import { Comments } from '../Comments/Comments';

import styles from './Comment.module.css';
const initialCommitState = {
    text: '',
    kids: [],
    id: 0,
};
export const Comment: FC<CommentProps> = ({ commentId }) => {
    const [comment, setComment] = useState(initialCommitState);
    const [list, setList] = useState(false);

    const str = commentId.toString();
    const label = 'Показать скрытый комментарий';
    useEffect(() => {
        getComment(str).then((data) => {
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
