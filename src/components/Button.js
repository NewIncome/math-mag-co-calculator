import PropTypes from 'prop-types';

export default function Button(props) {
  const { name, handleBtnChange } = props;
  return (
    <button
      type="button"
      id={name}
      onClick={handleBtnChange}
    >
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleBtnChange: PropTypes.func.isRequired,
};
