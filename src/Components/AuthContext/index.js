import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');
    const logOut = () => {
        setCurrentUser('');
    };
    const login = (user) => {
        console.log('🚀 ~ file: index.js:11 ~ login ~ id:', user);
        setCurrentUser(user);
    };

    return <AuthContext.Provider value={{ currentUser, logOut, login }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
