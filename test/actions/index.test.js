import { expect } from '../test_helper';
import { FETCH_COLORS, COLOR_SELECTED } from '../../src/actions/types';
import { fetchColors, selectColor } from '../../src/actions/index';

describe('Actions', () => {
    describe('fetchColors and selectColor', () => {
        it('have the correct types', () => {
            const actionFetchColors = fetchColors(),
                actionSelectColor = selectColor();

            expect(actionFetchColors.type).to.equal(FETCH_COLORS);
            expect(actionSelectColor.type).to.equal(COLOR_SELECTED);
        });
    });


    describe('selectColor', () => {
        it('has the correct payload', () => {
            const action = selectColor('red');
            expect(action.payload).to.equal('red');
        });
    });

});