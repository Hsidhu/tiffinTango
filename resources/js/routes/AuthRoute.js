import { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../redux/Authenticate/actions';
import Spinner from '../components/Spinner'

function AuthRoute({ children, ...rest }) {
    // Getting isAuthenticated store value from Authentication reducer.
    const { isAuthenticated, validateUserLoader } = useSelector(state => state.authenticateReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isAuthenticated) {
            dispatch({
                type: actions.GET_AUTH_USER,
            });
        }
    }, [])

    if (validateUserLoader) {
        return <Spinner />;
    }

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
