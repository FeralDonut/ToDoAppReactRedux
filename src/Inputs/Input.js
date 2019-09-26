import React from 'react';
import PropTypes from 'prop-types';
import style from './InputsStyles.css';

const Input = (props) => {
  const {
    id,
    name,
    onChange,
    type,
    placeholder,
    min,
    max,
    className,
    value,
    autoFocus,
  } = props;

  return (
    <input
      id={id}
      name={name}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
      className={[style.slider, className].join(' ')}
      value={value}
      autoFocus={autoFocus}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  className: PropTypes.string,
  value: PropTypes.string,
  autoFocus: PropTypes.bool,
};

export default Input;
