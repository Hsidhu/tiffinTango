import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Spinner from '../components/Spinner';

import PublicRoute from './PublicRoute';
import PublicLayout from '../layouts/PublicLayout';

import AuthRoute  from './AuthRoute'
import AuthRoutes from "../layouts/AuthRoutes"

import AdminRoute from './AdminRoute'
import AdminLayout from '../layouts/AdminLayout';

import CustomerRoute from './CustomerRoute';
import CustomerLayout from '../layouts/CustomerLayout'

const NoPageFound = lazy(() => import('../pages/noPageFound'));

export function AppRoutes({ }) {

    return (
        <Router>
            <Suspense fallback={<Spinner/>}>
                <Switch>

                    <PublicRoute path={["/", '/order/*', '/about-us', '/terms-and-conditions', '/policies']} exact>
                        <PublicLayout />
                    </PublicRoute>

                    <AuthRoute path={["/login", "/admin/login", "/customer/login", "/registration"]} exact>
                        <AuthRoutes />
                    </AuthRoute>
                    
                    <AdminRoute path={["/admin/*"]} >
                        <AdminLayout />
                    </AdminRoute>

                    <CustomerRoute path={["/customer/*"]} >
                        <CustomerLayout />
                    </CustomerRoute>

                    <Route path="*">
                        <NoPageFound />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
}
