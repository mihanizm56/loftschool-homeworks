import React from 'react';
import InputComponent from '../InputComponent';
import PlusButton from './../PlusButton/index';
import './InputBox.css';

const InputBox = ({ value, handleChange, saveData }) => (
  <div className="todo-item todo-item-new">
    <InputComponent handleChange={handleChange} value={value} />
    <PlusButton handleClick={saveData} />
  </div>
);

InputBox.defaultProps = {
  value: 'test',
  handleChange: () => console.log('check'),
  handleClick: () => console.log('default click')
};

export default InputBox;
