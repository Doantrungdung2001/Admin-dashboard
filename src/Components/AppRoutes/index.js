import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "../../Page/Dashboard";
import Manager from "../../Page/Manager";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/manage" element={<Manager/>}></Route>
            <Route path="/confirm" element={<Confirm/>}></Route>
        </Routes>
    )
}

export default AppRoutes;