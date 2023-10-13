import { Navigate } from "react-router-dom";


const RedirectTo = ({redirectTo}) => {
    return (
        <Navigate to={redirectTo} replace={false} />
    );
}

export default RedirectTo;
