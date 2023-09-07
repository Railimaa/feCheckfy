import {Routes, Route, BrowserRouter } from 'react-router-dom';
import { Signin } from '../pages/Signin';
import { Signup } from '../pages/Signup';
import { AuthGuard } from './AuthGuard';
import { Home } from '../pages/Home';
import { AuthLayout } from '../components/AuthLayout/AuthLayout';


export function Router() {

    return (
        <BrowserRouter>
            <Routes>

                <Route element={<AuthGuard isPrivate={false} />}>
                    <Route element={<AuthLayout />}>
                        <Route  path='/login' element={<Signin />}/>
                        <Route path='/register' element={<Signup />}/>
                    </Route>
                </Route>

                <Route element={<AuthGuard isPrivate />}>
                    <Route path='/' element={<Home />}/>
                </Route>

            </Routes>
        </BrowserRouter>
    );
}
