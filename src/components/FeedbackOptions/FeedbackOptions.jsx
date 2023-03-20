import PropTypes from 'prop-types';
import { List, Btn } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
            <List>
            {options.map(option => (
            <li key={Object.keys(option)}>
                <Btn type="button" name={Object.keys(option)} onClick={onLeaveFeedback}>
                {Object.keys(option)}
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