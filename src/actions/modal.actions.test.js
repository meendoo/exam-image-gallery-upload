import * as ModalActions from './modal.actions'
import MODAL from '../constants/modal.constants'


describe('It closes modals', () => {
  it('when closeModal action is triggered', () => {
    const expectedAction = { type: MODAL.CLOSE_MODAL }
    expect(ModalActions.closeModal()).toEqual(expectedAction)
  })
})