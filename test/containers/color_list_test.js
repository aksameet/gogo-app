import { renderComponent, expect } from '../test_helper';
import ColorList from '../../src/containers/color_list';
import App from '../../src/components/app';

describe('ColorList', () => {
    let component,
        parentComponent;

    beforeEach(() => {
        const props = { colors: [{name: 'blue', hex: 'fbfbfb'}, {name: 'red', hex: 'fefefe'}] };
        component = renderComponent(ColorList, null, props);
        parentComponent = renderComponent(App);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('content-color-list');
    });

    it('has an input area', () => {
        expect(component.find('input')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

    it('has a list', () => {
        expect(component.find('ul')).to.exist;
    });

    describe('entering some text', () => {
        beforeEach(() => {
            component.find('input').simulate('change', 'red');
        });

        it('shows that text in the input', () => {
            expect(component.find('input')).to.have.value('red');
        });
    });
});
