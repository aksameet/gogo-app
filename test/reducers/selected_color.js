import { expect } from '../test_helper';
import SelectedColorReducer from '../../src/reducers/reducer_selected_color';
import { COLOR_SELECTED } from '../../src/actions/types';

describe('Selected Color Reducer', () => {

    it('handles action of unknown type', () => {
        expect(SelectedColorReducer(undefined, {})).to.eql(null);
    });

    it('handles action of type COLOR_SELECTED', () => {
        const action = { type: COLOR_SELECTED, payload: 'blue' };
        expect(SelectedColorReducer('', action)).to.eql(action.payload);
    });
});