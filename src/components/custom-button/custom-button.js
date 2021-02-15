import React from 'react';

import './custom-button.scss';

const CustomButton = ({ children, isGoogleBtn, ...otherProps }) => {
  return (
    <button className={`${isGoogleBtn ? 'google-btn' : null} custom-button`} {...otherProps}>
      {children}
    </button>
  )
}

export default CustomButton