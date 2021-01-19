import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name, onBtnClick } = props;

  return (
    <button
      type="button"
      id={name}
      onClick={onBtnClick}
      className="btn"
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
