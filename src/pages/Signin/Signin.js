import React, { useState, useRef, useEffect } from 'react';
import { RiLinkedinFill } from 'react-icons/ri';
import classNames from 'classnames/bind';
import styles from './Signin.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { AppLogo, Button, GoogleSigninBtn } from '~/components';
import images from '~/assets';

const cx = classNames.bind(styles);

function Signin() {
    const emailInput = useRef();
    const passwordInput = useRef();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email().required('Email is required'),
            password: Yup.string().min(6, 'At least 6 characters long').required('Password is required'),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    });

    useEffect(() => {
        const emailElement = emailInput.current;
        const passwordElement = passwordInput.current;

        const handleFocusOut = (e) => {
            const label = e.target.parentNode.querySelector('label');
            if (e.target.value) {
                label.style.opacity = '0';
            } else {
                label.style.opacity = '1';
            }
        };

        emailElement.addEventListener('focusout', handleFocusOut);
        passwordElement.addEventListener('focusout', handleFocusOut);

        return () => {
            emailElement.removeEventListener('focusout', handleFocusOut);
            passwordElement.removeEventListener('focusout', handleFocusOut);
        };
    }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full bg-green-100 ">
            <section className="flex items-center justify-center">
                <div className="w-[80%] lg:w-[70%] flex flex-col justify-start items-center lg:items-start space-y-8">
                    <AppLogo />
                    <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                        <h1>It's a great time to</h1>
                        <h1>update your resume.</h1>
                    </div>
                    <div className="flex items-center">
                        <img className="max-w-full" src={images.resumeViewer} alt="resumeViewer" />
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center flex-col h-screen">
                <div className="min-w-[80%] lg:min-w-[70%] bg-white shadow-md p-8 rounded-lg">
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <h4 className="text-slate-600 text-center text-2xl font-semibold py-4">
                                Login to your account
                            </h4>
                            <div className="flex items-center justify-center">
                                <Button
                                    className="hover:bg-blue-100/50 ease-in-out duration-200 text-blue-500 rounded-full border border-blue-500"
                                    size="medium"
                                    type="button"
                                    leftIcon={<RiLinkedinFill />}
                                >
                                    Linkedin
                                </Button>
                                <GoogleSigninBtn />
                            </div>
                            <p className="text-slate-400 text-center">or login with</p>
                        </div>
                        <section className="space-y-6">
                            <div className="flex flex-col relative">
                                <input
                                    ref={emailInput}
                                    className={cx(
                                        'input-inner',
                                        'relative my-2 border-b border-slate-200 p-2 focus:border-indigo-500 outline-none ease duration-200',
                                    )}
                                    name="email"
                                    id="email"
                                    type="text"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />

                                <label
                                    className="cursor-text ease duration-300 focus-within:font-semibold pl-2 w-full top-1/2 -translate-y-1/2 absolute text-slate-500"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                {formik.touched.email && formik.errors.email ? (
                                    <span className="text-red-500">{formik.errors.email}</span>
                                ) : null}
                            </div>
                            <div className="flex flex-col relative">
                                <input
                                    ref={passwordInput}
                                    className={cx(
                                        'input-inner',
                                        'relative my-2 border-b border-slate-200 p-2 focus:border-indigo-500 outline-none ease duration-200',
                                    )}
                                    name="password"
                                    id="password"
                                    type="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                />

                                <label
                                    className="cursor-text ease duration-300 focus-within:font-semibold pl-2 w-full top-1/2 -translate-y-1/2 absolute text-slate-500"
                                    htmlFor="password"
                                >
                                    Password
                                </label>
                                {formik.touched.password && formik.errors.password ? (
                                    <span className="text-red-500">{formik.errors.password}</span>
                                ) : null}
                            </div>
                        </section>
                        <Button
                            size="large"
                            type="submit"
                            className="mt-6 rounded-md w-full bg-blue-500 text-white font-semibold hover:bg-blue-400 ease-in-out duration-200"
                        >
                            Log in
                        </Button>
                    </form>
                </div>
                <p className="py-4 text-slate-600">
                    Don't have an account?
                    <a href="/signup" className="ml-1 text-blue-500 hover:text-blue-400 ease duration-200">
                        Sign up here
                    </a>
                </p>
            </section>
        </div>
    );
}

export default Signin;