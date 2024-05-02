import { FC } from 'react';
import { CommentsProps } from '../../types/CommentsProps/CommentsProps';
import { CommentUpdate } from '../CommentUpdate/CommentUpdate';

export const NewCommentsUpdate: FC<CommentsProps> = ({ comments }) => {
    return (
        <>
            {' '}
            {comments.map((item: any) => (
                <div key={item.id}>
                    <CommentUpdate commentId={item} {...item} />
                </div>
            ))}
        </>
    );
};
