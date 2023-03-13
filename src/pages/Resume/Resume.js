import React, { Fragment } from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineEye } from 'react-icons/ai';
import classNames from 'classnames/bind';
import styles from './Resume.module.scss';

import { PersonalDetailForm, ExperienceForm } from '~/components';

const cx = classNames.bind(styles);

const tabs = {
    ['personal-detail']: {
        title: 'Personal Details',
        form: <PersonalDetailForm />,
    },
    ['experience']: {
        title: 'Experience',
        form: <ExperienceForm />,
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
                <section className="ml-4 w-48 fixed left-0 top-0 bottom-0 flex flex-col items-center justify-center space-y-8">
                    <div className="shadow-lg min-h-[12rem] bg-white rounded-md p-2 hidden md:block">
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
                    </div>
                    <NavLink
                        to="/preview"
                        className={cx(
                            'resume-container-preview',
                            'w-full h-32 bg-white flex shadow-lg hover:shadow-2xl hover:-translate-y-1 ease duration-200 relative',
                        )}
                    >
                        <div
                            className={cx(
                                'resume-preview-overlay',
                                'absolute inset-0 flex items-center justify-center opacity-0 ease duration-200 bg-white ease duration-300',
                            )}
                        >
                            <button className="p-2 border boder-slate-200 rounded-full text-slate-600" type="button">
                                <AiOutlineEye />
                            </button>
                        </div>
                    </NavLink>
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
