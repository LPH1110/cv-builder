import React from 'react';
import { UserAuth } from '~/contexts/AuthContext';

function Home() {
    const { logOut } = UserAuth();
    return (
        <div>
            Home page
            <button onClick={logOut}>Log out</button>
        </div>
    );
}

export default Home;
