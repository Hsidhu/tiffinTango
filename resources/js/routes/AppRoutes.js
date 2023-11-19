import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PublicRoutes from '../layouts/PublicRoutes';

import AuthRoute  from './AuthRoute'
import AuthRoutes from "../layouts/AuthRoutes"

import AdminRoute from './AdminRoute'
import AdminRoutes from '../layouts/AdminRoutes';

const NoPageFound = lazy(() => import('../pages/noPageFound'));

export function AppRoutes({ isAuthenticated }) {

    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>

                    <PublicRoute path={["/", '/order/*']} isAuthenticated={isAuthenticated} exact>
                        <PublicRoutes />
                    </PublicRoute>

                    <AuthRoute path={["/login", "/registration"]} isAuthenticated={isAuthenticated} exact>
                        <AuthRoutes />
                    </AuthRoute>
                    
                    <AdminRoute path={["/admin/*"]} isAuthenticated={isAuthenticated} >
                        <AdminRoutes />
                    </AdminRoute>

                    <Route path="*">
                        <NoPageFound />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
}
