import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiErrorCircle } from 'react-icons/bi';

const notify = ({ type, message }) => {
    switch (type) {
        case 'error':
            toast.error(message, {
                position: toast.POSITION.TOP_LEFT,
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
