import React, { Fragment } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { v4 as uuidv4 } from 'uuid';

import { PersonalDetailForm } from '~/components';

const tabs = {
    ['personal-detail']: {
        title: 'Personal Details',
        form: <PersonalDetailForm />,
    },
    ['experience']: {
        title: 'Experience',
        form: <div>Experience</div>,
    },
    ['education']: {
        title: 'Education',
        form: <div>Education</div>,
    },
    ['skills']: {
        title: 'Skills',
        form: <div>Skills</div>,
    },
    ['languages']: {
        title: 'Languages',
        form: <div>Languages</div>,
    },
};

function Resume() {
    return (
        <Tab.Group>
            <div className="">
                {/* Left */}
                <section className="ml-4 w-48 shadow-lg min-h-[12rem] bg-white rounded-md p-2 hidden md:block fixed top-1/2 -translate-y-1/2 left-0">
                    <Tab.List className="space-y-2">
                        {Object.entries(tabs).map(([id, tab]) => (
                            <Tab as={Fragment}>
                                {({ selected }) => (
                                    <button
                                        key={id}
                                        className={
                                            selected
                                                ? 'bg-blue-100 text-blue-500 font-semibold w-full px-4 py-2 rounded-md text-left'
                                                : 'bg-white text-slate-500 w-full px-4 py-2 rounded-md hover:bg-slate-100 text-left'
                                        }
                                    >
                                        {tab.title}
                                    </button>
                                )}
                            </Tab>
                        ))}
                    </Tab.List>
                </section>
                {/* Right */}
                <section>
                    <Tab.Panels className="w-full md:w-[40%] max-w-full flex m-auto h-full">
                        {Object.entries(tabs).map(([id, tab]) => (
                            <Tab.Panel key={id} className="w-full">
                                {tabs[id].form}
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </section>
            </div>
        </Tab.Group>
    );
}

export default Resume;
