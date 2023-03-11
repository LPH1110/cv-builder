import { Menu } from '@headlessui/react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { HiBars3CenterLeft } from 'react-icons/hi2';
import { RxEyeOpen } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { AppLogo, MenuWrapper, Button } from '~/components';
import { UserAuth } from '~/contexts/AuthContext';

const navLinks = [
    {
        id: uuidv4(),
        title: 'Resume',
        to: '/',
        leftIcon: <HiOutlineDocumentText />,
    },
    {
        id: uuidv4(),
        title: 'Cover letter',
        to: '/cover-letter',
        leftIcon: <HiOutlineDocumentText />,
    },
    {
        id: uuidv4(),
        title: 'Preview',
        to: '/preview',
        leftIcon: <RxEyeOpen />,
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
        title: 'My resumes',
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
            {/* Header */}
            <header className="z-[9999] bg-white h-20 border-b border-slate-300 fixed top-0 left-0 right-0">
                <div className="h-full mx-auto container flex justify-between items-center">
                    <Button
                        className="text-slate-500 p-3 rounded-full hover:text-slate-900 hover:bg-slate-100 ease duration-200 text-2xl md:!hidden"
                        type="button"
                    >
                        <HiBars3CenterLeft />
                    </Button>
                    <AppLogo />
                    <div className="flex items-center space-x-6                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     ">
                        {/* Navbar */}
                        <nav className="hidden md:flex items-center justify-between space-x-8 text-md">
                            {navLinks.map(({ id, title, to, leftIcon }) => (
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-blue-500 flex items-center'
                                            : 'flex items-center text-slate-500 hover:text-slate-700 ease duration-200'
                                    }
                                    key={id}
                                    to={to}
                                >
                                    <span className="mr-1.5">{leftIcon}</span>
                                    {title}
                                </NavLink>
                            ))}
                        </nav>
                        {/* Menu  */}
                        <MenuWrapper data={menuActions}>
                            <Menu.Button className="text-2xl md:text-base order-last ease duration-200 p-3 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900">
                                <AiOutlineUser />
                            </Menu.Button>
                        </MenuWrapper>
                    </div>
                </div>
            </header>
            <section className="bg-green-100 h-screen mt-20">
                <div className="container m-auto py-8">{children}</div>
            </section>
        </section>
    );
}

export default DefaultLayout;
