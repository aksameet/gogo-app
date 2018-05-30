import { renderComponent, expect } from '../test_helper';
import Wrapper from '../../src/containers/wrapper';

describe('Wrapper', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(Wrapper);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('wrapper');
    });

    it('shows a color list', () => {
		expect(component.find('.content-color-list')).to.exist;
	});

});
