import { Menu } from '@headlessui/react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { AppLogo, MenuWrapper } from '~/components';
import { UserAuth } from '~/contexts/AuthContext';

const navLinks = [
    {
        id: uuidv4(),
        title: 'Resume',
        to: '/',
    },
    {
        id: uuidv4(),
        title: 'Cover letter',
        to: '/cover-letter',
    },
    {
        id: uuidv4(),
        title: 'About',
        to: '/about',
    },
];

const menuActions = [
    {
        id: 0,
        title: 'My profile',
    },
    {
        id: 1,
        title: 'Account Settings',
    },
    {
        id: 2,
        title: 'Log out',
        to: '/logout',
        leftIcon: <FiLogOut />,
        spacer: true,
    },
];

function DefaultLayout({ children }) {
    const { logOut } = UserAuth();

    return (
        <section className="flex flex-col">
            <header className="bg-white h-20">
                <div className="h-full mx-auto container flex justify-between items-center">
                    <AppLogo />
                    <nav className="flex items-center justify-between space-x-8 text-md">
                        {navLinks.map(({ id, title, to }) => (
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'text-blue-500' : 'text-slate-500 hover:text-slate-700 ease duration-200'
                                }
                                key={id}
                                to={to}
                            >
                                {title}
                            </NavLink>
                        ))}
                        {/* Menu  */}
                        <MenuWrapper data={menuActions}>
                            <Menu.Button className="ease duration-200 p-3 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900">
                                <AiOutlineUser />
                            </Menu.Button>
                        </MenuWrapper>
                    </nav>
                </div>
            </header>
            <section className="bg-green-100 h-screen">
                <div className="container mx-auto">{children}</div>
            </section>
        </section>
    );
}

export default DefaultLayout;
