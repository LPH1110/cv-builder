import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate, Navigate } from 'react-router-dom';
import { RiLinkedinFill } from 'react-icons/ri';
import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Signup.module.scss';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import images from '~/assets';
import { AppLogo, Button, GoogleSigninBtn, notify, Toast, Spinner } from '~/components';
import { UserAuth } from '~/contexts/AuthContext';
import { getFirebaseError } from '~/services';

const cx = classNames.bind(styles);

function Signup() {
    const emailInput = useRef();
    const passwordInput = useRef();
    const passwordConfirmationInput = useRef();
    const { createUser, signin, user } = UserAuth();
    const [timeoutId, setTimeoutId] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showSpinner, setShowSpinner] = useState(false);
    const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const emailElement = emailInput.current;
        const passwordElement = passwordInput.current;
        const passwordConfirmationElement = passwordConfirmationInput.current;

        const handleFocusOut = (e) => {
            const label = e.target.parentNode.querySelector('label');
            if (e.target.value) {
                label.style.opacity = '0';
            } else {
                label.style.opacity = '1';
            }
        };

        emailElement?.addEventListener('focusout', handleFocusOut);
        passwordElement?.addEventListener('focusout', handleFocusOut);
        passwordConfirmationElement?.addEventListener('focusout', handleFocusOut);

        return () => {
            emailElement?.removeEventListener('focusout', handleFocusOut);
            passwordElement?.removeEventListener('focusout', handleFocusOut);
            passwordConfirmationElement?.removeEventListener('focusout', handleFocusOut);
            clearTimeout(timeoutId);
        };
    }, []);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Email must be a valid email').required('Email is required'),
            password: Yup.string().min(6, 'At least 6 characters long').required('Password is required'),
            passwordConfirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match'),
        }),
        onSubmit: (values) => {
            createAccountWithEmailAndPassword(values);
        },
    });

    const createAccountWithEmailAndPassword = async (data) => {
        try {
            setShowSpinner(true);
            const { email, password } = data;
            await createUser(email, password);
            notify({
                type: 'success',
                message: 'Create new account successfully',
            });
            setShowSpinner(false);
            await signin(email, password);
            setTimeoutId(setTimeout(() => navigate('/'), 2000));
        } catch (err) {
            console.error(err.code);
            notify({ type: 'error', message: getFirebaseError(err.code) });
            setShowSpinner(false);
        }
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleShowPasswordConfirmation = () => {
        setShowPasswordConfirmation(!showPasswordConfirmation);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full bg-green-100 gap-y-8">
            <section className="flex items-center justify-center">
                <div className="w-[80%] lg:w-[70%] flex flex-col justify-start items-center lg:items-start space-y-8">
                    <AppLogo className="pt-4 lg:pt-0" />
                    <div className="text-center lg:text-left text-2xl md:text-3xl lg:text-4xl font-semibold">
                        <h1>It's a great time to</h1>
                        <h1>update your resume.</h1>
                    </div>
                    <div className="flex items-center">
                        <img className="max-w-full" src={images.resumeViewer} alt="resumeViewer" />
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center flex-col h-full lg:h-screen">
                <div className="min-w-[80%] lg:min-w-[70%] bg-white shadow-md p-8 rounded-lg">
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <h4 className="text-slate-600 text-center text-2xl font-semibold py-4">
                                Create a new account
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
                            <div>
                                <div className="flex flex-col relative border-b border-slate-200">
                                    <input
                                        ref={emailInput}
                                        className={cx(
                                            'input-inner',
                                            'w-full marker:relative my-2 p-2 focus:border-indigo-500 outline-none ease duration-200',
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
                                </div>
                                {formik.touched.email && formik.errors.email ? (
                                    <span className="text-red-500">{formik.errors.email}</span>
                                ) : null}
                            </div>
                            <div>
                                <div className="flex flex-col relative border-b border-slate-200">
                                    <input
                                        ref={passwordInput}
                                        className={cx(
                                            'input-inner',
                                            'w-full marker:relative my-2 p-2 focus:border-indigo-500 outline-none ease duration-200',
                                        )}
                                        name="password"
                                        id="password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={formik.values.password}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.values.password.length > 0 && (
                                        <span
                                            onClick={handleShowPassword}
                                            className="top-1/2 -translate-y-1/2 absolute right-0 z-20 p-1 text-slate-600 hover:text-slate-500 ease duration-200"
                                        >
                                            {!showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                                        </span>
                                    )}
                                    <label
                                        className="cursor-text ease duration-300 focus-within:font-semibold pl-2 w-full top-1/2 -translate-y-1/2 absolute text-slate-500"
                                        htmlFor="password"
                                    >
                                        Password
                                    </label>
                                </div>
                                {formik.touched.password && formik.errors.password ? (
                                    <span className="text-red-500">{formik.errors.password}</span>
                                ) : null}
                            </div>
                            <div>
                                <div className="flex flex-col relative border-b border-slate-200">
                                    <input
                                        ref={passwordConfirmationInput}
                                        className={cx(
                                            'input-inner',
                                            'w-full marker:relative my-2 p-2 focus:border-indigo-500 outline-none ease duration-200',
                                        )}
                                        name="passwordConfirmation"
                                        id="passwordConfirmation"
                                        type={showPasswordConfirmation ? 'text' : 'password'}
                                        value={formik.values.passwordConfirmation}
                                        onChange={formik.handleChange}
                                    />
                                    {formik.values.passwordConfirmation.length > 0 && (
                                        <span
                                            onClick={handleShowPasswordConfirmation}
                                            className="top-1/2 -translate-y-1/2 absolute right-0 z-20 p-1 text-slate-600 hover:text-slate-500 ease duration-200"
                                        >
                                            {!showPasswordConfirmation ? <AiFillEye /> : <AiFillEyeInvisible />}
                                        </span>
                                    )}
                                    <label
                                        className="cursor-text ease duration-300 focus-within:font-semibold pl-2 w-full top-1/2 -translate-y-1/2 absolute text-slate-500"
                                        htmlFor="passwordConfirmation"
                                    >
                                        Repeat Password
                                    </label>
                                </div>
                                {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                                    <span className="text-red-500">{formik.errors.passwordConfirmation}</span>
                                ) : null}
                            </div>
                        </section>
                        <Button
                            size="large"
                            type="submit"
                            leftIcon={showSpinner ? <Spinner className="w-5 h-5" /> : null}
                            className="mt-6 rounded-md w-full bg-blue-500 text-white font-semibold hover:bg-blue-400 ease-in-out duration-200"
                        >
                            Sign up
                        </Button>
                    </form>
                </div>
                <p className="py-4 text-slate-600">
                    Already have an account?
                    <NavLink to="/signin" className="ml-1 text-blue-500 hover:text-blue-400 ease duration-200">
                        Sign in
                    </NavLink>
                </p>
            </section>
            <Toast />
        </div>
    );
}

export default Signup;
