import React from 'react';
import s from './Notification.module.css';
import PropTypes from 'prop-types';

function Notification(props) {
  return <h2 className={s.notification}>{props.message}</h2>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
