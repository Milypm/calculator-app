import PropTypes from 'prop-types';
import '../style/style.css';

const Button = ({ props }) => {
  const { btnName, clickHandler } = props;
  const color = btnName === '÷' || btnName === 'x' || btnName === '-' || btnName === '+' || btnName === '=' ? 'orange' : 'grey';
  const width = btnName === '0' ? 'large' : 'normal';
  return (
    <button type="button" className={`button-container ${color} ${width}`} onClick={clickHandler(btnName)}>
      <span>{btnName}</span>
    </button>
  );
};

Button.propTypes = {
  props: PropTypes.func.isRequired,
  clickHandler: PropTypes.func.isRequired,
  btnName: PropTypes.string.isRequired,
};

export default Button;
