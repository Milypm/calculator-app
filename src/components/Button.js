import PropTypes from 'prop-types';
import '../style/style.css';

function Button({ btnName }) {
  const color = btnName === '÷' || btnName === 'X' || btnName === '-' || btnName === '+' || btnName === '=' ? 'orange' : 'grey';
  const width = btnName === '0' ? 'large' : 'normal';
  return (
    <div className={`button-container ${color} ${width}`}>
      <p>{btnName}</p>
    </div>
  );
}

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
};

export default Button;
