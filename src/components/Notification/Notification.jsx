import PropTypes from 'prop-types';

const Notification = ({ message }) => <p>{message}</p>;



Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;