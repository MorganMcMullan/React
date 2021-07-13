import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToDoRequest } from './thunks';
import './NewToDoForm.css';
import { getToDos } from './selectors';



const NewToDoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className='new-todo-form'>
            <input
                className='new-todo-input'
                type='text'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder='Type your new todo here...'
            />
            <button
                className='new-todo-button'
                onClick={() =>{
                    const isDuplicateText = todos.some(todo => todo.text === inputValue)
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}>
                Create Todo
            </button>
        </div>
    );
}

const mapStateToProps = state => ({
    todos: getToDos(state)
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addToDoRequest(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewToDoForm);