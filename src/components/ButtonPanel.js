import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel(props) {
  const { onClick } = props;
  return (
    <>
      <div className="group1">
        <Button name="AC" onClick={onClick} />
        <Button name="+/-" onClick={onClick} />
        <Button name="%" onClick={onClick} />
        <Button name="÷" onClick={onClick} />
      </div>
      <div className="group2">
        <Button name="7" onClick={onClick} />
        <Button name="8" onClick={onClick} />
        <Button name="9" onClick={onClick} />
        <Button name="X" onClick={onClick} />
      </div>
      <div className="group3">
        <Button name="4" onClick={onClick} />
        <Button name="5" onClick={onClick} />
        <Button name="6" onClick={onClick} />
        <Button name="-" onClick={onClick} />
      </div>
      <div className="group4">
        <Button name="1" onClick={onClick} />
        <Button name="2" onClick={onClick} />
        <Button name="3" onClick={onClick} />
        <Button name="+" onClick={onClick} />
      </div>
      <div className="group5">
        <Button name="0" onClick={onClick} />
        <Button name="." onClick={onClick} />
        <Button name="=" onClick={onClick} />
      </div>
    </>
  );
}

ButtonPanel.defaultProps = {
  onClick: null,
};

ButtonPanel.propTypes = {
  onClick: PropTypes.func,
};
