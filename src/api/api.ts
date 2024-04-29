import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0';
export const itemUrl = `${baseUrl}/item/`;

export const getShowStory = async (storyId: string) => {
    try {
        const res = await axios
            .get(`${itemUrl + storyId}.json`)
            .then(({ data }) => data);
        return res;
    } catch (err) {
        console.error(err);
    }
};

export const getShowStoriesComment = async (commentId: string) => {
    try {
        const res = await axios
            .get(`${itemUrl + commentId}.json`)
            .then(({ data }) => data);
        return res;
    } catch (err) {
        console.error(err);
    }
};
