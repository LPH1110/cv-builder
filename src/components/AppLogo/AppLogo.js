import React from 'react';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';

function AppLogo() {
    return (
        <a href="/" className="inline-flex items-center space-x-2 text-3xl text-blue-500 font-semibold">
            <HiOutlineDocumentDuplicate />
            <h1>angelcv</h1>
        </a>
    );
}

export default AppLogo;
