import { loadToDosInProgress, loadToDosSuccess, loadToDosFailure, createToDo, removeToDo, markToDoAsCompleted } from "./actions";

export const displayAlert = (text) => {
    alert(text);
}

export const loadToDos = () => async dispatch => {
    try {
        dispatch(loadToDosInProgress());
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();

        dispatch(loadToDosSuccess(todos));
    }
    catch (e) {
        dispatch(loadToDosFailure());
        dispatch(displayAlert(e));
    }
}

export const addToDoRequest = text => async dispatch => {

    try {
        const body = JSON.stringify({ text });
        const response = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: body
        });
        const todo = await response.json();
        dispatch(createToDo(todo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const removeToDoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete'
        });
        const removedToDo = await response.json();
        dispatch(removeToDo(removedToDo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}

export const markToDoAsCompletedRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            method: 'post'
        });
        const updatedToDo = await response.json();
        dispatch(markToDoAsCompleted(updatedToDo));
    } catch (e) {
        dispatch(displayAlert(e));
    }
}