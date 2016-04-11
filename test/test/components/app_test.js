import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// 使用describe把相似的测试结合起来
describe('App', () => {
	let component;
	
	beforeEach(() => {
		component = renderComponent(App);
	});

	// 使用it测试一个目标的一个行为
	it('shows a comment box', () => {
		// 使用expect断言一个目标
		expect(component.find('.comment-box')).to.exist;
		//expect(component).to.have.class('comment-box');
	});

	it('shows a comment list', () => {
		expect(component.find('.comment-list')).to.exist;
	});
});

