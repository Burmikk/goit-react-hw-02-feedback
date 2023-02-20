import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.scss';
const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        className={`${styles.btn} ${styles.good}`}
        name="good"
        onClick={event => onLeaveFeedback(event)}
      >
        Good
      </button>
      <button
        className={`${styles.btn} ${styles.neutral}`}
        name="neutral"
        onClick={event => onLeaveFeedback(event)}
      >
        Neutral
      </button>
      <button
        className={`${styles.btn} ${styles.bad}`}
        name="bad"
        onClick={event => onLeaveFeedback(event)}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
