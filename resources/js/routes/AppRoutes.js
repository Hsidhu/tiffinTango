import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PrivateRoute, PublicRoute, AuthRoute } from '../routes/helpers';
import ProtectedRoutes from '../routes/ProtectedRoutes';
import AuthRoutes from "../routes/AuthRoutes"
import PublicRoutes from '../routes/PublicRoutes';

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
                    <PrivateRoute path={["/admin/*"]} isAuthenticated={isAuthenticated} >
                        <ProtectedRoutes />
                    </PrivateRoute>

                    <Route path="*">
                        <NoPageFound />
                    </Route>
                </Switch>
            </Suspense>
        </Router>
    );
}
