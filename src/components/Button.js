import PropTypes from 'prop-types';
import '../style/style.css';

const Button = ({ btnName }) => {
  const color = btnName === '÷' || btnName === 'x' || btnName === '-' || btnName === '+' || btnName === '=' ? 'orange' : 'grey';
  const width = btnName === '0' ? 'large' : 'normal';
  return (
    <button type="button" className={`button-container ${color} ${width}`}>
      <span>{btnName}</span>
    </button>
  );
};

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
