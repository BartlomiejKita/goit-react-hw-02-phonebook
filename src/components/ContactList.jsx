import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.li`
  &::before {
    content: '•';
    color: dodgerblue;
    font-weight: bold;
    display: inline-block;
    width: 1em;
  }
`;

const Btn = styled.button`
  cursor: pointer;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 6px;
  border-radius: 10px;
  font-size: 1em;
  width: 30%;
  background: dodgerblue;
  color: #fff;
  border: #fff;
  &:hover {
    background: linear-gradient(45deg, greenyellow, dodgerblue);
  }
`;

const ElementWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const ContactList = ({ getContacts, deleteContact }) => {
  return (
    <ul>
      {getContacts().map(({ id, name, number }) => (
        <ElementWrapper key={'el'+id}>
          <List key={id}>
            {name}: {number}
          </List>
          <Btn key={'btn'+id} onClick={() => deleteContact(id)}>
            Delete
          </Btn>
        </ElementWrapper>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  getContacts: PropTypes.func,
};

export default ContactList;
