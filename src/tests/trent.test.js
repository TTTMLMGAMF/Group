const { showModal, addOrSub } = require('../Components/TestFolder/trentLogic')

describe('Show modal sets state to true', () => {
    test('If clicked, set visible to true', () => {
        expect(showModal(false)).toBe(true)
    })
    test('If true, set to false', () => {
        expect(showModal(true)).toBe(false)
    })
    test('If falsy value, give truthy', () => {
        expect(showModal(0)).toBeTruthy()
    })
    test('If truthy, return falsy', () => {
        expect(showModal(1)).toBeFalsy()
    })
    test('If given add, expect true', () => {
        expect(addOrSub('add')).toBe(true)
    })
    test('If given sub, expect false', () => {
        expect(addOrSub('sub')).toBe(false)
    })
    test('If addOrSub is given anything else, return undefined', () => {
        expect(addOrSub('addition')).toBe(undefined)
    })
})