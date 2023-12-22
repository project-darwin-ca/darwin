import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div className = "container-fluid">
            <div className = "row justify-content-center mt-3">
                <div className = "col-md-4 text-center">
                    <div className="mt-3"></div>
                    <p className = "lead">Welcome to Project Darwin!</p>
                </div>
            <div className="my-4">
                <Outlet />
            </div>
            </div>
        </div>
    )
}

export default Layout