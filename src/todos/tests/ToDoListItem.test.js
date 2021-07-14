import { expect } from 'chai';
import { getBorderStyleForDate } from '../ToDoListItem';

describe('getBorderStyleForDate', () => {
    it('returns none if when the date is less then 5 days ago', () => {
        
        const today = Date.now();
        const recentDate = new Date(Date.now() - 8640000 * 3)
        const expected = 'none';
        const actual = getBorderStyleForDate(recentDate, today);

        expect(actual).to.equal(expected);
    });
    it('returns a border if when the date is more then 5 days ago', () => {
        const today = Date.now();
        const recentDate = new Date(Date.now() - 8640000 * 5)
        const expected = '4px solid red';
        const actual = getBorderStyleForDate(recentDate, today);

        expect(actual).to.equal(expected);
    });
});