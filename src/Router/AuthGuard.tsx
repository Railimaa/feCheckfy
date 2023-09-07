import { Navigate, Outlet } from 'react-router-dom';

interface AuthGuardProps {
  isPrivate: boolean
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
    const signin = false;

    if (!signin && isPrivate) {
        return <Navigate to={'/login'} replace/>;
    }

    if (signin && !isPrivate) {
        return <Navigate to={'/'} replace />;
    }

    return <Outlet />;
}
