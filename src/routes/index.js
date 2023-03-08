import { v4 as uuidv4 } from 'uuid';
import { Home, Signin, Signup, Templates, CoverLetter, About, Resume } from '~/pages';
import { DefaultLayout } from '~/layouts';
export { default as ProtectedRoute } from './ProtectedRoute';

export const publicRoutes = [
    {
        id: uuidv4,
        component: Resume,
        layout: DefaultLayout,
        protected: true,
        path: '/',
    },
    {
        id: uuidv4,
        component: Templates,
        layout: DefaultLayout,
        protected: true,
        path: '/templates',
    },
    {
        id: uuidv4,
        component: CoverLetter,
        layout: DefaultLayout,
        protected: true,
        path: '/cover-letter',
    },
    {
        id: uuidv4,
        component: About,
        layout: DefaultLayout,
        protected: true,
        path: '/about',
    },
    {
        id: uuidv4,
        component: Signin,
        path: '/signin',
    },
    {
        id: uuidv4,
        component: Signup,
        path: '/signup',
    },
];
