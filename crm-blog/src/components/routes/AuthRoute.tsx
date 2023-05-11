import { Navigate, Outlet } from "react-router-dom";

function AuthRoute() {
    const auth = true;
  return (
    auth ? <Outlet /> : <Navigate to="home" />
  )
}

export default AuthRoute