const {showModal} = require('../tests/jeffLogic')

describe('Tests Show Modal button', () => {
    test ('if given true, return false', () => {
        expect(showModal(true)).toBe(false)
      })
      test('if given false, return true', () => {
        expect(showModal(false)).toBe(true)
      })
      test('if given falsey, return true', () => {
        expect(showModal(0)).toBeTruthy()
      })
      test('if given truthy, return falsy', ()=> {
        expect(showModal('a string')).toBeFalsy()
      })
})


