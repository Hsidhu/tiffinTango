import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Spinner from '../components/Spinner';

import PublicLayout from '../layouts/PublicLayout';
import AuthLayout from "../layouts/AuthLayout"
import AdminLayout from '../layouts/AdminLayout';
import CustomerLayout from '../layouts/CustomerLayout'

import { publicRouteList, authRouteList, adminRouteList, customerRouteList } from '../routes/routes';

const NoPageFound = lazy(() => import('../pages/noPageFound'));

export function AppRoutes({ }) {

    return (
        <Router>
            <Suspense fallback={<Spinner/>}>
                <Routes>

                    <Route path="/" element={<PublicLayout />}>

                        {publicRouteList.map(({ component: Component, path, exact }, index) => (
                            <Route path={`/${path}`} key={index} exact={exact} element={<Component />}/>
                        ))}

                    </Route>

                    <Route element={<AuthLayout />}>
                        {authRouteList.map(({ component: Component, path, exact }, index) => (
                            <Route path={`/${path}`} key={index} exact={exact} element={<Component />}/>
                        ))}

                    </Route>

                    <Route path="/admin" element={<AdminLayout />}>
                        {adminRouteList.map(({ component: Component, path, exact }, index) => (
                            
                            <Route path={`${path}`} key={index} exact={exact} element={<Component />}/>
                            
                        ))}
                    </Route>

                    <Route path="/customer" element={<CustomerLayout />}>

                        {customerRouteList.map(({ component: Component, path, exact }, index) => (
                            <Route path={`${path}`} key={index} exact={exact} element={<Component />}/>
                        ))}

                    </Route>

                    <Route path="*" element={<NoPageFound />} />
                   
                </Routes>
            </Suspense>
        </Router>
    );
}
