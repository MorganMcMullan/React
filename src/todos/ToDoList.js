import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ToDoListItem from './ToDoListItem';
import NewToDoForm from './NewToDoForm';
import { loadToDos, removeToDoRequest, markToDoAsCompletedRequest } from './thunks'
import './ToDoList.css';

const ToDoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {

    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading ToDos...</div>
    const content = (
        <div className="list-wrapper">
            <NewToDoForm />
            {todos.map((todo, index) =>
                <ToDoListItem key={index} todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed} />)}
        </div>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading
});

const mapStateToDispatch = dispatch => ({
    startLoadingTodos: () => dispatch(loadToDos()),
    onRemovePressed: id => dispatch(removeToDoRequest(id)),
    onCompletedPressed: id => dispatch(markToDoAsCompletedRequest(id))
});

export default connect(mapStateToProps, mapStateToDispatch)(ToDoList);