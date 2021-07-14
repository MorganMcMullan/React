import React from 'react';
import styled from 'styled-components';
import { hot } from 'react-hot-loader';
import ToDoList from './todos/ToDoList';

const AppContainer = styled.div`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
`;

const App = () => (
    <AppContainer>
        <ToDoList />
    </AppContainer>
);

export default hot(module)(App);