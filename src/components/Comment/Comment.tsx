import { Div, Text } from '@vkontakte/vkui';
import { FC, useEffect, useState } from 'react';
import { getComment } from '../../api/api';
import { CommentProps } from '../../types/CommentProps/CommentProps';
import { Comments } from '../Comments/Comments';
const initialCommitState = {
    text: '',
    kids: [],
};
export const Comment: FC<CommentProps> = ({ commentId }) => {
    const [comment, setComment] = useState(initialCommitState);
    const str = commentId.toString();
    console.log(`strComment`, str);
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
                    <Div>
                        {' '}
                        <Text weight="3">{text}</Text>
                        <div id="frame"> </div>
                    </Div>

                    {kids && <Comments comments={kids} />}
                </>
            )}
        </>
    );
};

// function CreateDom (text){

//    let frame=document.getElementById('frame')
// const doc=document.implementation.createHTMLDocument();
// let p=doc.createElement('p');
// p.textContent=''
// }
