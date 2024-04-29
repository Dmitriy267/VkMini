import { createRoot } from 'react-dom/client';
import vkBridge from '@vkontakte/vk-bridge';
import { AppConfig } from './AppConfig';
import { Provider } from 'react-redux';
vkBridge.send('VKWebAppInit');
import { store } from '../src/redux/store/store';

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <AppConfig />
    </Provider>
);

if (import.meta.env.MODE === 'development') {
    import('./eruda');
}
