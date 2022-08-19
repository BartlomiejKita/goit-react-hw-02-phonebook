import PropTypes from 'prop-types';
import styled from 'styled-components';

const Message = styled.p`
  font-size: 1em;
  font-family: sans-serif;
`;

const Notification = ({ message }) => {
  return (
    <>
      <Message>{message}</Message>
    </>
  );
};

Notification.propTypes = {
  title: PropTypes.string,
};

export default Notification;
