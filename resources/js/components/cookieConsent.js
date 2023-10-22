import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const CookieConsent = () => {
  const [visible, setVisible] = useState(true);

  return null;

  const handleAccept = () => {
    setVisible(false);
    // Set a cookie to track user consent, e.g., using a library like js-cookie
  };

  return (
    <Modal
      title="Cookie Consent"
      visible={visible}
      footer={[
        <Button key="accept" type="primary" onClick={handleAccept}>
          Accept
        </Button>,
      ]}
    >
      We use cookies to improve your experience on our website. By using our website, you consent to the use of cookies.
    </Modal>
  );
};

export default CookieConsent;