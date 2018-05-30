import { expect } from '../test_helper';
import ColorsReducer from '../../src/reducers/reducer_colors';
import { FETCH_COLORS } from '../../src/actions/types';

describe('Color Reducer', () => {
    it('handles action of unknown type', () => {
        expect(ColorsReducer(undefined, {})).to.eql([]);
    });
});