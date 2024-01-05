// PrivacyPolicy.js

import React from 'react';

const PrivacyPolicy = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'left',
    backgroundColor: 'lightgreen', // Add your desired background color here
  };

  const headingStyle = {
    fontSize: '24px',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Privacy Policy</h2>
      <p style={paragraphStyle}>
        At Foodie, we take your privacy seriously...
      </p>
      <p style={paragraphStyle}>
        Here are some additional points about our privacy policy:
      </p>
      <ul style={{ paddingLeft: '20px' }}>
        <li style={paragraphStyle}>Point 1: Description of the first point.</li>
        <li style={paragraphStyle}>Point 2: Description of the second point.</li>
        {/* Add more list items as needed */}
      </ul>
      <p style={paragraphStyle}>
        Feel free to reach out to us if you have any questions or concerns regarding your privacy.
      </p>
      {/* Add more content with inline styles */}
    </div>
  );
};

export default PrivacyPolicy;
