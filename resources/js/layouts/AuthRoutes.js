import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import {authRouteList} from '../routes/routes';

const AuthRoutes = () => {
    return (
        <Layout className="layout">
            <Switch>
                {authRouteList.map(({ component: Component, path, exact }, index) => (
                    <Route path={`/${path}`} key={index} exact={exact}>
                        <Component />
                    </Route>
                ))}
            </Switch>
        </Layout>
    );
}

export default AuthRoutes;
