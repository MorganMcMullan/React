import { createSelector } from "reselect";

export const getToDos = state => state.todos.data;
export const getToDosLoading = state => state.todos.isLoading;

export const getIncompleteToDos = createSelector(
    getToDos,
    (todos) => todos.filter(todo => !todo.isCompleted)
);
export const getCompleteToDos = createSelector(
    getToDos,
    (todos) => todos.filter(todo => todo.isCompleted)
);