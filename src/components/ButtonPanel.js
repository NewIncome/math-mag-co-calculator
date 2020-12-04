import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({ handleChange }) {
  const handlePnlClick = event => {
    handleChange(event.target.id);
    console.log(event);
    console.log(event.target.id);
  };

  return (
    <>
      <div className="group1">
        <Button name="AC" handleBtnChange={handlePnlClick} />
        <Button name="+/-" handleBtnChange={handlePnlClick} />
        <Button name="%" handleBtnChange={handlePnlClick} />
        <Button name="÷" handleBtnChange={handlePnlClick} />
      </div>
      <div className="group2">
        <Button name="7" handleBtnChange={handlePnlClick} />
        <Button name="8" handleBtnChange={handlePnlClick} />
        <Button name="9" handleBtnChange={handlePnlClick} />
        <Button name="X" handleBtnChange={handlePnlClick} />
      </div>
      <div className="group3">
        <Button name="4" handleBtnChange={handlePnlClick} />
        <Button name="5" handleBtnChange={handlePnlClick} />
        <Button name="6" handleBtnChange={handlePnlClick} />
        <Button name="-" handleBtnChange={handlePnlClick} />
      </div>
      <div className="group4">
        <Button name="1" handleBtnChange={handlePnlClick} />
        <Button name="2" handleBtnChange={handlePnlClick} />
        <Button name="3" handleBtnChange={handlePnlClick} />
        <Button name="+" handleBtnChange={handlePnlClick} />
      </div>
      <div className="group5">
        <Button name="0" handleBtnChange={handlePnlClick} />
        <Button name="." handleBtnChange={handlePnlClick} />
        <Button name="=" handleBtnChange={handlePnlClick} />
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
