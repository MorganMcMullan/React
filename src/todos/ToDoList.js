import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import ToDoListItem from './ToDoListItem';
import NewToDoForm from './NewToDoForm';
import {
    loadToDos,
    removeToDoRequest,
    markToDoAsCompletedRequest
} from './thunks'
import {
    getToDosLoading,
    getIncompleteToDos,
    getCompleteToDos
} from './selectors';


const ListWrapper = style.div`
    max-width: 700px;
    margin: auto;
`;

const ToDoList = ({ incompleteToDos = [], completeToDos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {

    useEffect(() => {
        startLoadingTodos();
    }, []);

    const loadingMessage = <div>Loading ToDos...</div>
    const content = (
        <ListWrapper>
            <NewToDoForm />
            <h3>Incomplete</h3>
            {incompleteToDos.map((todo, index) =>
                <ToDoListItem key={index} todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed} />)}
            <h3>Completed</h3>
            {completeToDos.map((todo, index) =>
                <ToDoListItem key={index} todo={todo}
                    onRemovePressed={onRemovePressed}
                    onCompletedPressed={onCompletedPressed} />)}
        </ListWrapper>
    );
    return isLoading ? loadingMessage : content;
};

const mapStateToProps = state => ({
    completeToDos: getCompleteToDos(state),
    incompleteToDos: getIncompleteToDos(state),
    isLoading: getToDosLoading(state)
});

const mapStateToDispatch = dispatch => ({
    startLoadingTodos: () => dispatch(loadToDos()),
    onRemovePressed: id => dispatch(removeToDoRequest(id)),
    onCompletedPressed: id => dispatch(markToDoAsCompletedRequest(id))
});

export default connect(mapStateToProps, mapStateToDispatch)(ToDoList);