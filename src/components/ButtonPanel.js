import Button from './Button';

export default function ButtonPanel(props) {
  function handleClick(buttonName) {
    return props.onClick(buttonName.target.value);
  }

  return (
    <>
      <div className="group1">
        <Button name="AC" onClick={handleClick} />
        <Button name="+/-" onClick={handleClick} />
        <Button name="%" onClick={handleClick} />
        <Button name="÷" onClick={handleClick} />
      </div>
      <div className="group2">
        <Button name="7" onClick={handleClick} />
        <Button name="8" onClick={handleClick} />
        <Button name="9" onClick={handleClick} />
        <Button name="X" onClick={handleClick} />
      </div>
      <div className="group3">
        <Button name="4" onClick={handleClick} />
        <Button name="5" onClick={handleClick} />
        <Button name="6" onClick={handleClick} />
        <Button name="-" onClick={handleClick} />
      </div>
      <div className="group4">
        <Button name="1" onClick={handleClick} />
        <Button name="2" onClick={handleClick} />
        <Button name="3" onClick={handleClick} />
        <Button name="+" onClick={handleClick} />
      </div>
      <div className="group5">
        <Button name="0" onClick={handleClick} />
        <Button name="." onClick={handleClick} />
        <Button name="=" onClick={handleClick} />
      </div>
    </>
  );
}
