import { Redirect, Route } from 'react-router-dom';

function AuthRoute({ children, isAuthenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={
                ({ location }) =>
                (!isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/admin/dashboard',
                            state: { from: location },
                        }}
                    />
                ))
            }
        />
    );
}

export default AuthRoute;
