export type CommentProps = {
    commentId: number;
    kids: Kids[];
};

type Kids = {
    idKid: number;
    text: string;
    time: number;
    type: string;
};
