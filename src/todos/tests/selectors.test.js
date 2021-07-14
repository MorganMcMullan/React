import { expect } from 'chai';
import { 
    getIncompleteToDos, 
    getCompleteToDos, 
    getToDos,
    getToDosLoading
} from '../selectors';

describe('The getToDos selector', () => {
    it('Returns all todos from the state', () => {
        const fakeState = {
            todos: {
                data: [
                    {
                        text: 'Say Hello',
                        isCompleted: true
                    },
                    {
                        text: 'Say Goodbye',
                        isCompleted: false
                    },
                    {
                        text: 'Climb A Mountain',
                        isCompleted: false
                    }
                ]
            }
        }
        const expected = [
            {
                text: 'Say Hello',
                isCompleted: true
            },
            {
                text: 'Say Goodbye',
                isCompleted: false
            },
            {
                text: 'Climb A Mountain',
                isCompleted: false
            }
        ]

        const actual = getToDos(fakeState);

        expect(actual).to.deep.equal(expected);
    });
});

describe('The getToDosLoading selector', () => {
    it('Returns false when isLoading is false', () => {
        const fakeState = {
            todos: {
                data: [],
                isLoading: false
            }
        }
        const expected = false;

        const actual = getToDosLoading(fakeState);

        expect(actual).to.equal(expected);
    });
    it('Returns true when isLoading is true', () => {
        const fakeState = {
            todos: {
                data: [],
                isLoading: true
            }
        }
        const expected = true;

        const actual = getToDosLoading(fakeState);

        expect(actual).to.equal(expected);
    });
});

describe('The getCompleteToDos selector', () => {
    it('Returns only completed todos from the state', () => {
        const fakeTodos = [
            {
                text: 'Say Hello',
                isCompleted: true
            },
            {
                text: 'Say Goodbye',
                isCompleted: false
            },
            {
                text: 'Climb A Mountain',
                isCompleted: false
            }
        ]
        const expected = [
            {
                text: 'Say Hello',
                isCompleted: true
            }
        ]

        const actual = getCompleteToDos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });
});

describe('The getIncompleteToDos selector', () => {
    it('Returns only incomplete todos from the state', () => {
        const fakeTodos = [
            {
                text: 'Say Hello',
                isCompleted: true
            },
            {
                text: 'Say Goodbye',
                isCompleted: false
            },
            {
                text: 'Climb A Mountain',
                isCompleted: false
            }
        ]
        const expected = [
            {
                text: 'Say Goodbye',
                isCompleted: false
            },
            {
                text: 'Climb A Mountain',
                isCompleted: false
            }
        ]

        const actual = getIncompleteToDos.resultFunc(fakeTodos);

        expect(actual).to.deep.equal(expected);
    });

});