
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'

const usePageTitle = (pageTitle) => {
    const location = useLocation();

    const siteName = useSelector(state => state.siteName)

    useEffect(() => {
        const newPathTitle = location.pathname.split('/').pop() || 'Home';
        document.title = `${pageTitle ? `${pageTitle} | ` : ''} ${siteName} | ${newPathTitle}`;
    }, [location.pathname, pageTitle, siteName]);
};

export default usePageTitle;

