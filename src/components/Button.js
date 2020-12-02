import PropTypes from 'prop-types';

export default function Button(props) {
  const { name } = props;

  function handleClick(buttonName) {
    props.onClick(buttonName);
  }

  return (
    <button
      type="button"
      id={name}
      onClick={handleClick}
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
