import React from 'react'
import DeleteIcon from '../DeleteIcon'
import renderer from 'react-test-renderer'

describe('DeleteIcon', () => {
    it('should render as it is', ()=> {
        const spinner = renderer.create(<DeleteIcon />);
        expect(spinner).toMatchSnapshot();
    })
})
