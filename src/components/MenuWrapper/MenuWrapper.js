import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { UserAuth } from '~/contexts/AuthContext';

function MenuWrapper({ children, data }) {
    const { logOut } = UserAuth();

    return (
        <Menu as="div" className="relative inline-flex items-center justify-center">
            {children}
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute top-full right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        {data.map((action) => {
                            return (
                                <Menu.Item key={action.id}>
                                    {({ active }) => (
                                        <button
                                            onClick={action.to === '/logout' ? logOut : null}
                                            className={`${
                                                action.spacer ? 'border-t border-slate-300' : ''
                                            } text-slate-500 hover:text-slate-900 group flex w-full items-center rounded-md px-2 py-2 text-md ease duration-200`}
                                        >
                                            {action.leftIcon && <span className="mr-2">{action.leftIcon}</span>}
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
    );
}

export default MenuWrapper;
