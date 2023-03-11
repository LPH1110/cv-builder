import React, { useRef, useEffect, useState } from 'react';
import { CiUser } from 'react-icons/ci';

import FormWrapper from '../FormWrapper';
import classNames from 'classnames/bind';
import styles from './PersonalDetail.module.scss';
import Input from '../Input';

const cx = classNames.bind(styles);

function PersonalDetail() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [personalWebsite, setPersonalWebsite] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');

    return (
        <FormWrapper>
            <section className="grid grid-cols-3 space-x-6">
                {/* Avatar */}
                <div
                    className={cx(
                        'avatar',
                        'relative flex items-center justify-center border border-slate-300 rounded-sm text-slate-300 cursor-pointer',
                    )}
                >
                    <CiUser className="w-16 h-16" />
                    <div
                        className={cx(
                            'avatar-overlay',
                            'flex items-center justify-center text-slate-700 absolute inset-0 ease duration-200 bg-white/80',
                        )}
                    >
                        <span className="text-center">Image file size must be less than 5MB</span>
                    </div>
                </div>
                {/* Personal Info */}
                <div className="col-span-2 space-y-6">
                    <Input
                        name="firstName"
                        type="text"
                        value={firstName}
                        label="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Input
                        label="Last Name"
                        name="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Input
                        label="Job Title"
                        name="jobTitle"
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                    />
                </div>
            </section>
            <section className="mt-8 space-y-6">
                <h4 className="text-slate-500 text-lg uppercase">Contact Details</h4>
                <div className="space-y-6">
                    <Input
                        name="phoneNumber"
                        type="text"
                        label="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    <Input
                        label="Email Address"
                        name="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        name="personalWebsite"
                        type="text"
                        label="Personal Website (Optional)"
                        value={personalWebsite}
                        onChange={(e) => setPersonalWebsite(e.target.value)}
                    />
                </div>
            </section>
            <section className="mt-8 space-y-6">
                <h4 className="text-slate-500 text-lg uppercase">Location</h4>
                <div className="grid grid-cols-2 gap-x-12">
                    <Input
                        name="city"
                        type="text"
                        label="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Input
                        name="country"
                        type="text"
                        label="State or Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </div>
            </section>
        </FormWrapper>
    );
}

export default PersonalDetail;
