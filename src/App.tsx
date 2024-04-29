import { FC } from 'react';
import { NewsPage } from './components/NewsPage/NewsPage';

export const App: FC = () => {
    return (
        <>
            <NewsPage id={0} title={''} time={0} type={''} url={''} />
        </>
    );
};
