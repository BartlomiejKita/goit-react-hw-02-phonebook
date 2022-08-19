import PropTypes from 'prop-types';
import styled from 'styled-components';

const Filterbox = styled.div`
  position: relative;
  width: 300px;
  height: 50px;
  margin-bottom: 50px;
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid #000;
  outline: none;
  background: none;
  padding: 10px;
  border-radius: 10px;
  font-size: 1.2em;
  box-sizing: border-box;

  &:focus ~ span {
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }

  &:not(:placeholder-shown) ~ span {
    transform: translateX(-13px) translateY(-35px);
    font-size: 1em;
  }
`;

const Span = styled.span`
  position: absolute;
  top: 14px;
  left: 20px;
  font-size: 1em;
  transition: 0.6s;
  font-family: sans-serif;
`;

const Filter = ({ onChange }) => {
  return (
    <Filterbox>
      <label>
        <Input type="text" name="filter" onChange={onChange} placeholder=" " />
        <Span>Find contacts by name</Span>
      </label>
    </Filterbox>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
