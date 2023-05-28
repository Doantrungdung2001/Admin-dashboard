import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Page/Dashboard";
import Manager from "../../Page/Manager";
import Confirm from "../../Page/Confirm";
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