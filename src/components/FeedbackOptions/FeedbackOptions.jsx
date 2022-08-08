import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
      <div className={s.container}>
        <h1>Please leave feedback</h1>
            <ul className={s.buttonList}>
      {options.map(option => (
        <li key={option.name}>
          <button
            type="button"
            name={option.name}
            className={s.button}
            onClick={onLeaveFeedback}
          >
            {option.title}
          </button>
        </li>
      ))}
    </ul>
        </div>
    )

}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;