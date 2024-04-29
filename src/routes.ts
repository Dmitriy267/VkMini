import {
    createHashRouter,
    RouteWithRoot,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

// export const DEFAULT_VIEW_PANELS = {
//     HOME: 'home',
//     NEWS1: 'newsStoryPage',
// } as const;
export const DEFAULT_VIEW_PANELS = 'default_panels';
// export const routes = RoutesConfig.create([
//     createRoot(DEFAULT_ROOT, [
//         createView(DEFAULT_VIEW, [
//             createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
//             createPanel(
//                 DEFAULT_VIEW_PANELS.NEWS1,
//                 `/${DEFAULT_VIEW_PANELS.NEWS1}`,
//                 []
//             ),
//         ]),
//     ]),
// ]);

// export const router = createHashRouter(routes.getRoutes());

//routes.default_root.default_view.persik_panel

// export const router = createHashRouter([
//     {
//         path: '/',
//         panel: 'home_panel',
//         view: 'default_view',
//     },
// ]);
const routes: RouteWithRoot[] = [
    {
        path: '/', // Путь
        panel: 'home_panel', // Желаемый Panel
        view: 'default_view', // Желаемый View
        root: 'default_root', // Желаемый Root
    },
    {
        path: `/newsStoryPage`,
        panel: 'newsStoryPage',
        view: 'default_view',
        root: 'default_root',
    },
];
export const router = createHashRouter(routes);
