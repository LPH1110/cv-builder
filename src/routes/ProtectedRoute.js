import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserAuth } from '~/contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
    console.log(UserAuth());
    const { user } = UserAuth();
    if (!user) {
        return <Navigate to="/signin" />;
    } else {
        return children;
    }
};

export default ProtectedRoute;