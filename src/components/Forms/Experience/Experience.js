import React, { useState, createRef } from 'react';
import FormWrapper from '../FormWrapper';
import { AiOutlinePlus } from 'react-icons/ai';
import { HiXMark, HiListBullet } from 'react-icons/hi2';
import { v4 as uuidv4 } from 'uuid';
import Checkbox from 'rc-checkbox';
import 'rc-checkbox/assets/index.css';

import { Button } from '~/components';
import Input from '../Input';
import TextArea from '../TextArea';

function Experience() {
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [checked, setChecked] = useState(false);
    const [accomplishments, setAccomplishments] = useState('');
    const textAreaRef = createRef();

    console.log(accomplishments.split('\n'));

    const generateBulletPoint = () => {
        const bullet = '\u2022';
        const lines = accomplishments.split('\n');
        lines[-1] = `${bullet} ${lines[-1]}`;
        setAccomplishments(lines.join('\n'));
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-semibold">Experience</h1>
            <Button
                className="w-full rounded-md border border-dashed border-blue-500 text-blue-500 hover:bg-blue-100/50 ease duration-200"
                size="large"
                type="button"
                leftIcon={<AiOutlinePlus />}
            >
                Add Experience
            </Button>
            <FormWrapper>
                <button className="m-2 absolute top-0 right-0 p-1.5 rounded-full bg-slate-100 text-slate-300 hover:text-slate-700 ease duration-200">
                    <HiXMark />
                </button>
                <div className="space-y-6">
                    <div className="space-y-6">
                        <Input
                            name="jobTitle"
                            type="text"
                            value={jobTitle}
                            label="Job Title"
                            onChange={(e) => setJobTitle(e.target.value)}
                        />
                        <Input
                            name="company"
                            type="text"
                            value={company}
                            label="Company or Project Name"
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <Input
                            name="startDate"
                            type="text"
                            value={startDate}
                            label="Start Date"
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <Input
                            name="endDate"
                            type="text"
                            value={endDate}
                            label="End Date"
                            onChange={(e) => setEndDate(e.target.value)}
                        />

                        <p className="col-span-2 text-right">
                            <label className="text-slate-500">
                                <Checkbox defaultChecked onChange={(e) => setChecked(e.target.checked)} />
                                &nbsp; Currently work here
                            </label>
                        </p>
                    </div>
                    <div>
                        <TextArea
                            ref={textAreaRef}
                            name="accomplishments"
                            type="text"
                            label="Accomplishments"
                            value={accomplishments}
                            onChange={(e) => setAccomplishments(e.target.value)}
                        />
                        <Button
                            type="button"
                            leftIcon={<HiListBullet />}
                            onClick={generateBulletPoint}
                            className="text-slate-400 hover:text-slate-700 text-sm py-2 ease duration-200 w-full !justify-start"
                        >
                            Click here to start a bulleted list
                        </Button>
                    </div>
                </div>
            </FormWrapper>
        </div>
    );
}

export default Experience;
