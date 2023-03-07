import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

import { Button, Spinner, notify } from '~/components';
import { UserAuth } from '~/contexts/AuthContext';
import { getFirebaseError } from '~/services';

function GoogleSigninBtn() {
    const { googleSignIn } = UserAuth();
    const navigate = useNavigate();
    const [showSpinner, setShowSpinner] = useState(false);

    const handleGoogleSignin = async () => {
        setShowSpinner(true);
        try {
            await googleSignIn();
            navigate('/');
        } catch (err) {
            notify({ type: 'error', message: getFirebaseError(err.code) });
        }
        setShowSpinner(false);
    };
    return (
        <Button
            className="hover:bg-red-100/50 ease-in-out duration-200 text-red-500 rounded-full border border-red-500"
            size="medium"
            type="button"
            leftIcon={showSpinner ? <Spinner className="w-5 h-5" /> : <FcGoogle />}
            onClick={handleGoogleSignin}
        >
            Google
        </Button>
    );
}

export default GoogleSigninBtn;
