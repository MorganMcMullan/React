import 'node-fetch';
import fetchMock from 'fetch-mock';
import { expect } from 'chai';
import sinon from 'sinon';
import { loadToDos } from '../thunks';

describe('The loadToDos thunk', () => {
    it('Dispatches the correct actions in the success scenario', async () => {
        const fakeDispatch = sinon.spy();

        const fakeTodos = [{ text: '1' }, { text: '2' }];
        fetchMock.get('http://localhost:8080/todos', fakeTodos);


        const expectedFirstAction = { type: 'LOAD_TODOS_IN_PROGRESS' }
        const expectedSecondAction = { 
            type: 'LOAD_TODOS_SUCCESS',
            payload: {
                todos: fakeTodos
            } 
        };

        await loadToDos()(fakeDispatch);

        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);


        fetchMock.reset();
    });
});