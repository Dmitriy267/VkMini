import { FC } from 'react';
import { CommentsProps } from '../../types/CommentsProps/CommentsProps';
import { Comment } from '../Comment/Comment';
export const Comments: FC<CommentsProps> = ({ comments }) => {
    return (
        <>
            {comments.slice(0, 5).map((item: any) => (
                <div key={item.id}>
                    <Comment commentId={item} />
                </div>
            ))}
        </>
    );
};
