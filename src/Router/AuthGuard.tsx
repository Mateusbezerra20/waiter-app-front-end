import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { signedIn } = useContext(AuthContext);

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
