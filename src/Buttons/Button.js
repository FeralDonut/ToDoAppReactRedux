import React from 'react';
import PropTypes from 'prop-types';
import style from './ButtonStyles.css'

const Button = props => {
  const {
    text,
    onClick,
    className,
    disabled,
  } = props;

  return (
    <button
      onClick={onClick}
      className={[style.button, className].join(' ')}
      disabled={disabled}
    >
      {text}
    </button>
  );
};


Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
