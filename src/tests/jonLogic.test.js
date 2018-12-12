const {onCollapse, submitCategory} = require('../Logic/jonLogic');

const question = {
    id: 1,
    q1: 'how many cups of sugar does it take to get to the moon?',
    a1: 'three'
}



describe('Tests if sidebar collapses', () => {
    test('if given true, return false', () => {
        expect(onCollapse(true)).toBe(false);
    });
    test('if given false, return true', () => {
        expect(onCollapse(false)).toBe(true);
    });
    test('if given falsey value, it returns true', () => {
        expect(onCollapse(0)).toBeTruthy();
    });
})

describe('Can add questions to game', () => {
    beforeEach(() => {
        game = [];
    })
    test('can add questions to question', () => {
        expect(submitCategory(game, question)).toHaveLength(1);
    });
    test('that new game has the correct quesiton', () => {
        const newGame= submitCategory(game, question);
        expect(newGame[0].id).toEqual(question.id);
    });
})