import {Navigate, Outlet} from "react-router-dom"
import Cookies from 'js-cookie'


function ProtectedRoute({ redirectPath = '/', isAllowed }) {
    const token = Cookies.get('token')
    if (!isAllowed || !token) {
        return <Navigate to={redirectPath} replace />
    }

return <Outlet />
}

export default ProtectedRoute