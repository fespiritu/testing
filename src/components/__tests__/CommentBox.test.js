import React from 'react';
import { mount, unmount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import App from '../App';
import { exportAllDeclaration } from '@babel/types';
import Root from 'Root';

describe('Testing CommentBox', () => {
    let wrapped;
    beforeEach(() => {
        wrapped = mount(<Root><CommentBox /></Root>);
    })
    
    afterEach(() => {
        wrapped.unmount();
    });

    it('has a text area and a button', () => {
        
        // console.log('wrapped: ', wrapped.debug());
        expect(wrapped.find('textarea').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(2);
    });
    describe('Text area', () => {
        const testComment = 'Hello there!';
        beforeEach(() => {
            const event = {
                target: { value: testComment}
            }
            wrapped.find('textarea').simulate('change', event);
            wrapped.update();
           //  console.log('wrapped: ', wrapped.debug());
        });

        it('has a text area that users can type in', () => {
            // find component again to see typed value
            console.log('wrapped: ', wrapped.debug());
            expect(testComment === wrapped.find('textarea').props().value).toBe(true);
        });
        it('when form is submitted, text area gets updated', () => {
            //submit form
            let form = wrapped.find('form');
            form.simulate('submit');
            wrapped.update();

            expect(wrapped.find('textarea').props().value === '').toBe(true);
        });    
    })
   
    // it('', () => {

    //     expect();
    // });

})