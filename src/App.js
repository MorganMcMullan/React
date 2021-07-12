import React from 'react';
import { hot } from 'react-hot-loader';
import ToDoList from './todos/ToDoList';
import "./App.css";

const App = () => (
    <div className="App">
        <ToDoList />
    </div>
);

export default hot(module)(App);