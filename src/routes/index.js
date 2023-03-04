import { v4 as uuidv4 } from 'uuid';
import { Home, Signin } from '~/pages';
export { default as ProtectedRoute } from './ProtectedRoute';

export const publicRoutes = [
    {
        id: uuidv4,
        component: Home,
        protected: true,
        path: '/',
    },
    {
        id: uuidv4,
        component: Signin,
        path: '/signin',
    },
];
