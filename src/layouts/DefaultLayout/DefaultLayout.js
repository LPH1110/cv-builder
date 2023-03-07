import React, { Fragment } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import { Menu, Transition } from '@headlessui/react';

import { UserAuth } from '~/contexts/AuthContext';
import { AppLogo, Button } from '~/components';

const navLinks = [
    {
        id: uuidv4(),
        title: 'Templates',
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
        id: uuidv4,
        title: 'My profile',
    },
    {
        id: uuidv4,
        title: 'Account Settings',
    },
    {
        id: uuidv4,
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
                    <nav className="flex items-center justify-between space-x-6 text-lg">
                        {navLinks.map(({ id, title, to }) => (
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? 'text-blue-500' : 'text-slate-500 hover:text-slate-700 ease duration-200'
                                }
                                id={id}
                                to={to}
                            >
                                {title}
                            </NavLink>
                        ))}
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="p-3 hover:bg-slate-100 ease duration-200 rounded-full text-slate-500 hover:text-slate-700">
                                <AiOutlineUser />
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="px-1 py-1 ">
                                        {menuActions.map((action) => {
                                            return (
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <button
                                                            onClick={action.to === '/logout' ? logOut : null}
                                                            className={`${
                                                                action.spacer ? 'border-t border-slate-300' : ''
                                                            } text-slate-500 hover:text-slate-900 group flex w-full items-center rounded-md px-2 py-2 text-md ease duration-200`}
                                                        >
                                                            {action.leftIcon && (
                                                                <span className="mr-2">{action.leftIcon}</span>
                                                            )}
                                                            {action.title}
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            );
                                        })}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </nav>
                </div>
            </header>
            <section className="bg-green-100 h-full">
                <div className="container mx-auto">{children}</div>
            </section>
        </section>
    );
}

export default DefaultLayout;
