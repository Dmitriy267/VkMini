import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { newsApi } from '../services/news';
import newsOneReducer from '../features/newsOne/newsOneSlice';
export const store = configureStore({
    reducer: {
        [newsApi.reducerPath]: newsApi.reducer,
        newsOne: newsOneReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(newsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
