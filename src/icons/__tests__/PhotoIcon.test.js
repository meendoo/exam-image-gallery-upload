import React from 'react'
import PhotoIcon from '../PhotoIcon'
import renderer from 'react-test-renderer'

describe('PhotoIcon', () => {
    it('should render as it is', ()=> {
        const spinner = renderer.create(<PhotoIcon />);
        expect(spinner).toMatchSnapshot();
    })
})
