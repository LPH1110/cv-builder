import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Toastify-overrides.scss';

const notify = ({ type, message }) => {
    switch (type) {
        case 'error':
            toast.error(message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            break;
        case 'success':
            toast.success(message, {
                position: toast.POSITION.TOP_RIGHT,
            });
            break;
        default:
            toast('Default notification!');
            break;
    }
};

function Toast() {
    return <ToastContainer />;
}

export default Toast;
export { notify };
