import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';
import { urlComments } from '../actions';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest(urlComments, {
        status: 200,
        response: {
            data: [
                { name: 'Fetched #1' }, { name: 'Fetched #2' }
            ]
        }
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', () => {
    // Attempt to render the entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    //find the 'fetchComments' button and click it
    wrapped.find('#btnFetchCommments').simulate('click');
    moxios.wait(() => {
        // Expect to find a list of comments
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        // done();
        wrapped.unmount();
    });


});
