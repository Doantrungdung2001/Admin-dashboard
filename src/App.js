import './App.css';
import AppRoutes from './Components/AppRoutes';
import { AuthProvider } from './Components/AuthContext';

function App() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
}

export default App;
