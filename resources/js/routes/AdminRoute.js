import { Redirect, Route } from 'react-router-dom';

function AdminRoute({ children, isAuthenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
            (isAuthenticated ? (
                children
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location },
                    }}
                />
            ))
            }
        />
    );
}

export default AdminRoute;
