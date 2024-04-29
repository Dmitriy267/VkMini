import { FC } from 'react';
import { NewsPage } from './components/NewsPage/NewsPage';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { Root, View, Panel } from '@vkontakte/vkui';
import { NewsStoryPage } from './components/NewsStoryPage/NewsStoryPage';
import { DEFAULT_VIEW, DEFAULT_VIEW_PANELS } from './routes';
export const App: FC = () => {
    const {
        view: activeView = DEFAULT_VIEW,
        panel: activePanel = DEFAULT_VIEW_PANELS,
    } = useActiveVkuiLocation();
    // const activePanel = useGetPanelForView('default_view');

    return (
        <>
            <Root activeView={activeView}>
                <View activePanel={activePanel} nav="default_view">
                    <Panel nav="home_panel">
                        {' '}
                        <NewsPage
                            id={0}
                            title={''}
                            time={0}
                            type={''}
                            url={''}
                        />
                    </Panel>
                    <Panel nav="newsStoryPage">
                        {' '}
                        <NewsStoryPage />
                    </Panel>
                </View>
            </Root>
        </>
    );
};
