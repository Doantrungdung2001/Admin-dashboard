import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState('');
    const logOut = () => {
        setCurrentUser('');
    };
    const login = (id) => {
        console.log('🚀 ~ file: index.js:11 ~ login ~ id:', id);
        setCurrentUser(id);
    };

    return <AuthContext.Provider value={{ currentUser, logOut, login }}>{children}</AuthContext.Provider>;
};

export default AuthContext;
