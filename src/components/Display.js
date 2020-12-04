import PropTypes from 'prop-types';

export default function Display(props) {
  const { result } = props;

  return (
    <div className="display">
      {result}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string.isRequired,
};
