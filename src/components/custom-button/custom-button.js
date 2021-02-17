import React from 'react';

import './custom-button.scss';

const CustomButton = ({ children, isGoogleBtn, inverted, ...otherProps }) => {
  return (
    <button
      className={
        `${inverted ? 'inverted' : null}
         ${isGoogleBtn ? 'google-btn' : null}
         custom-button`
      }
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default CustomButton