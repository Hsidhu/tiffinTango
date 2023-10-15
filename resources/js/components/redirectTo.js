import { useHistory } from 'react-router-dom';

const RedirectTo = ({redirectTo}) => {
    const navigate = useHistory();
    navigate(redirectTo)
    return (
        null
    );
}

export default RedirectTo;
