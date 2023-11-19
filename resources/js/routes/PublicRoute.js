import { Redirect, Route } from 'react-router-dom';

// Public route restrict to access authenticated pages before login.
function PublicRoute({ children, isAuthenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => (children)}
        />
    );
}

export default PublicRoute;