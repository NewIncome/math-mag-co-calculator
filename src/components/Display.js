import PropTypes from 'prop-types';

export default function Display(props) {
  const { result } = props;

  return (
    <div className="display">
      { /* to display a 0 when result==null */ }
      {result || '0'}
    </div>
  );
}

Display.defaultProps = { result: '0' };

Display.propTypes = {
  result: PropTypes.string,
};
