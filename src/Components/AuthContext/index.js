import { createContext, useState } from 'react';

const AuthContext = createContext({
    email: '',
    auth: false,
});

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({ id: '', auth: false });
    console.log('🚀 ~ file: index.js:10 ~ AuthProvider ~ currentUser:', currentUser);
    const logOut = () => {
        setCurrentUser({
            id: '',
            auth: false,
        });
    };
    const login = (id) => {
        setCurrentUser({
            id: id,
            auth: true,
        });
    };
    const authContext = {
        currentUser: currentUser.id,
        logOut: logOut,
        login: login,
    };
    return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthContext;
