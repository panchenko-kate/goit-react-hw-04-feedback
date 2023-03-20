import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
    return (
        <p>{message}</p>
    )
}


Notification.prototype = {
    title: PropTypes.string
}