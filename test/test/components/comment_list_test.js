import { renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
	let component;

	beforeEach(() => {
		const states = { comments: ['good one', '+1', 'okok']};
		component = renderComponent(CommentList, null, states);
	});

	it('show an LI for each comment', () => {
		expect(component.find('li').length).to.equal(3);
	});

	it('shows each comment that is provided', () => {
		expect(component).to.contain('good one');
		expect(component).to.contain('+1');
		expect(component).to.contain('okok');
	});
});