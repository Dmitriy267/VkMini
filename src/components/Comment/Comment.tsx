import { Div, Text } from '@vkontakte/vkui';
import { FC, useEffect, useState } from 'react';
import { getComment } from '../../api/api';
import { CommentProps } from '../../types/CommentProps/CommentProps';
import { Comments } from '../Comments/Comments';
import { useAppSelector } from '../../redux/hooks/hooks';

const initialCommitState = {
    text: '',
    kids: [],
    id: 0,
};
export const Comment: FC<CommentProps> = ({ commentId }) => {
    const [comment, setComment] = useState(initialCommitState);

    const newComment = useAppSelector((state) => state.comment.comment);

    const str = commentId.toString();

    useEffect(() => {
        getComment(str).then((data) => {
            if (data) {
                setComment(data);
            }
        });
    }, []);

    const { text, kids } = comment;

    return (
        <>
            {comment && (
                <>
                    {newComment}
                    <Div>
                        {' '}
                        <Text weight="3">{text}</Text>
                    </Div>

                    {kids && <Comments comments={kids} />}
                </>
            )}
        </>
    );
};
