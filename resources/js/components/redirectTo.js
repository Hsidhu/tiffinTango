import { useNavigate } from 'react-router-dom';

const RedirectTo = ({redirectTo}) => {
    const navigate = useNavigate();
    navigate(redirectTo)
    return (
        null
    );
}

export default RedirectTo;
