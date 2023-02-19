import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button name="good" onClick={event => onLeaveFeedback(event)}>
        Good
      </button>
      <button name="neutral" onClick={event => onLeaveFeedback(event)}>
        Neutral
      </button>
      <button name="bad" onClick={event => onLeaveFeedback(event)}>
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
