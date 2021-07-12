import PropTypes from 'prop-types';
import '../style/style.css';

const Button = (props) => {
  const { btnName } = props;
  const { clickHandler } = props;
  const color = btnName === '÷' || btnName === 'x' || btnName === '-' || btnName === '+' || btnName === '=' ? 'orange' : 'grey';
  const width = btnName === '0' ? 'large' : 'normal';
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <button type="button" className={`button-container ${color} ${width}`} onClick={handleClick(btnName)}>
      <span>{btnName}</span>
    </button>
  );
};

Button.defaultProps = {
  clickHandler: null,
};

Button.propTypes = {
  clickHandler: PropTypes.func,
  btnName: PropTypes.string.isRequired,
};

export default Button;
