import PropTypes from 'prop-types';
import { List, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
            <List>
            {options.map(option => (
            <li key={option}>
                <Btn type="button" onClick={onLeaveFeedback}>
                {option}
                </Btn>
            </li>
            ))}
            </List>
    )
};


FeedbackOptions.prototype = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func,
}