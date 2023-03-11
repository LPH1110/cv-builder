export const initialState = {
    personalDetailForm: {
        firstName: '',
        lastName: '',
        jobTitle: '',
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        default:
            console.error('Invalid action!!');
            break;
    }
};

export default reducer;
