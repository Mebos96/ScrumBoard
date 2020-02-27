export const MOVE_CARD = 'MOVE_CARD'
export const ADD_CARD = "ADD_CARD"
export function addCard(title,text) {
    return {
        type: ADD_CARD,
        payload:{
            title,
            text
        }
    }
}
export function moveCard(source,destination) {
    return {
        type: MOVE_CARD,
        payload:{
            source,
            destination
        }
    }
}