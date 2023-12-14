
export default function backlogReducer(cards, action) {
    switch (action.type) {
        case 'added': {
            return [
                ...cards,
                action.story
            ]
        }
        case 'init': {
            return action.cards
        }
        default:
            break;
    }
}