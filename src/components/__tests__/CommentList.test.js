import React from 'react';
import { mount } from 'enzyme';
import CommentList from '../CommentList';
import Root from 'Root';

let wrapped;
beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})
it('creates one LI per comment', () => {
    console.log('commentList: ', wrapped.debug());
    const lis = wrapped.find('li');
 
    expect(lis.length).toEqual(2);
});

it('shows the text for each comment', () => {
    const lis = wrapped.find('li');
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
});