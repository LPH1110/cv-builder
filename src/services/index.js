export const getFirebaseError = (code) => {
    switch (code) {
        case 'auth/wrong-password':
            return 'You have typed wrong password';
        case 'auth/email-already-in-use':
            return 'This email is already exists. Do you want to sign in?';
        case 'auth/user-not-found':
            return "This email doesn't exist. Create a new one?";
        default:
            return '';
    }
};
