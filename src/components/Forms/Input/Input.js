import React, { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ name, type = 'text', value, onChange, label }) {
    const inputRef = useRef();

    useEffect(() => {
        const inputElement = inputRef.current;

        const handleFocusOut = (e) => {
            const label = e.target.parentNode.querySelector('label');
            if (e.target.value) {
                label.style.opacity = '0';
            } else {
                label.style.opacity = '1';
            }
        };

        inputElement?.addEventListener('focusout', handleFocusOut);

        return () => {
            inputElement?.removeEventListener('focusout', handleFocusOut);
        };
    }, []);
    return (
        <div className="flex flex-col relative border-b border-slate-200">
            <input
                ref={inputRef}
                className={cx(
                    'input-inner',
                    'w-full marker:relative my-2 p-0.5 focus:border-indigo-500 outline-none ease duration-200',
                )}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                type={type}
            />

            <label
                className="cursor-text ease duration-300 focus-within:font-semibold pl-2 w-full top-1/2 -translate-y-1/2 absolute text-slate-500"
                htmlFor={name}
            >
                {label || name}
            </label>
        </div>
    );
}

export default Input;
