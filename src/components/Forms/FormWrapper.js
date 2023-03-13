import React from 'react';

function FormWrapper({ children }) {
    return <div className="relative p-8 bg-white h-full w-full shadow-lg rounded-xl">{children}</div>;
}

export default FormWrapper;
