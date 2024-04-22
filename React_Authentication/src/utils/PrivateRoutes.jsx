import { Outlet, Navigate } from "react-router-dom";

const privateRoutes = () => {
    const user = false;
    return user ? <Outlet /> : <Navigate to='/login' />
}

export default privateRoutes;