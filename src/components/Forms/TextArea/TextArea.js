import React, { useRef, useEffect, forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './TextArea.module.scss';

const cx = classNames.bind(styles);

const TextArea = forwardRef(({ name, type = 'text', value, onChange, label }, ref) => {
    useEffect(() => {
        const inputElement = ref.current;

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
        <div className="flex flex-col pt-4 relative border-b border-slate-200 focus-within:border-blue-500 ease duration-200">
            <textarea
                ref={ref}
                className={cx(
                    'input-inner',
                    'w-full marker:relative my-2 p-0.5 focus:border-indigo-500 outline-none ease duration-200 resize-none',
                )}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                type={type}
                rows={4}
            />

            <label
                className="cursor-text ease duration-300 focus-within:font-semibold pl-2 w-full top-1/4 absolute text-slate-500"
                htmlFor={name}
            >
                {label || name}
            </label>
        </div>
    );
});

export default TextArea;
