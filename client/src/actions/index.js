export const signIn = (userID) => {
    return {
        type: 'SIGN_IN',
        payload: userID
    }
}

export const signOut = () => {
    return {
        type : 'SIGN_OUT'
    }
}   