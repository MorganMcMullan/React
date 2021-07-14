import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addToDoRequest } from './thunks';
import { getToDos } from './selectors';

const NewToDoFormContainer = styled.div`
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    box-shadow: 0 4px 8px grey;
`;

const NewToDoInput = styled.input`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    width: 70%;
    outline: none;
`;

const NewToDoButton = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    width: 20%;
    background-color: #22ee22;
`;

const NewToDoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <NewToDoFormContainer>
            <NewToDoInput
                className='new-todo-input'
                type='text'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder='Type your new todo here...'
            />
            <NewToDoButton
                onClick={() =>{
                    const isDuplicateText = todos.some(todo => todo.text === inputValue)
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}>
                Create Todo
            </NewToDoButton>
        </NewToDoFormContainer>
    );
}

const mapStateToProps = state => ({
    todos: getToDos(state)
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addToDoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);