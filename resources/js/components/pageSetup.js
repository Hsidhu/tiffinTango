import React, { useEffect } from 'react';

const PageSetup = ({ title, Component }) => {
    
    useEffect(() => {
        const pageTitle = title || 'Default Title';
        document.title = pageTitle;
    }, [title]);

    return <Component />;
};

export default PageSetup;
