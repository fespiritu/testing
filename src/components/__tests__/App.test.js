import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import { exportAllDeclaration } from '@babel/types';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('Testing App', () => {
    let wrapped;

    beforeEach(() => {
        wrapped = shallow(<App />);
    });

    it('shows a comment box', () => { 
        // console.log('app shallow: ',wrapped.debug());
        // console.log('app shallow html: ', wrapped.html());
        // expect(wrapped.find(CommentBox).exists()).toBe(true);
        expect(wrapped.find(CommentBox).length).toEqual(1);
    });

    it('shows a comment list', () => {
        expect(wrapped.find(CommentList).length).toEqual(1);
    });
})


