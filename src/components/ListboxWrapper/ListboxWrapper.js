import React, { useState, Fragment, useRef, useEffect } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames/bind';
import styles from './ListboxWrapper.module.scss';

const cx = classNames.bind(styles);

const people = [
    { id: 1, name: 'Durward Reynolds' },
    { id: 2, name: 'Kenton Towne' },
    { id: 3, name: 'Therese Wunsch' },
    { id: 4, name: 'Benedict Kessler' },
    { id: 5, name: 'Katelyn Rohan' },
];

export default function ListboxWrapper() {
    const [selectedPerson, setSelectedPerson] = useState({
        id: 0,
        name: 'Person',
    });
    const selectBtnRef = useRef();

    return (
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
            <div className="relative">
                <Listbox.Button>{selectedPerson.name}</Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="absolute mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {people.map((person) => (
                            <Listbox.Option
                                className="ui-active:bg-blue-500 ui-active:text-white p-2 ease duration-200"
                                key={person.id}
                                value={person}
                                disabled={person.unavailable}
                            >
                                {person.name}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}
