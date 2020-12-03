import PropTypes from 'prop-types';

export default function Button(props) {
  const { name, onClick } = props;
  return (
    <button
      type="button"
      id={name}
      onClick={onClick}
    >
      { name }
    </button>
  );
}

Button.defaultProps = {
  onClick: null,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
