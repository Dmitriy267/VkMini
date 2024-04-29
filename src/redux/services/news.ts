import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { News } from '../../types/News/News';

export type NewsStory = News[];
export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ' https://hacker-news.firebaseio.com/v0',
    }),
    endpoints: (builder) => ({
        getNewsStories: builder.query<NewsStory, string>({
            query: (topstories) => `${topstories}`,
        }),
        getNewsStory: builder.mutation({
            query: (newsId) => ({
                url: `/item/${newsId}`,
                method: 'POST',
                body: newsId,
            }),
        }),
    }),
});

export const { useGetNewsStoriesQuery, useGetNewsStoryMutation } = newsApi;
