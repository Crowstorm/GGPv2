export const toggleDialogueState = () => {
    return function (dispatch) {
        dispatch({
            type: 'TOGGLE_DIALOGUE'
        })
    }
}

export const addDialogue = (dialogue) => dispatch => {
    dispatch({
        type: 'ADD_DIALOGUE',
        dialogue
    })
}

export const toggleCharacterCard = () => {
    return function (dispatch) {
        dispatch({
            type: 'TOGGLE_CHARACTER_CARD'
        })
    }
}

export const toggleCombatRewardsCard = () => {
    return function (dispatch) {
        dispatch({
            type: 'TOGGLE_COMBAT_REWARDS_CARD'
        })
    }
}

export const toggleShop = () => {
    return function (dispatch) {
        dispatch({
            type: 'TOGGLE_SHOP'
        })
    }
}

export const toggleGameData = () => {
    return function (dispatch) {
        dispatch({
            type: 'TOGGLE_GAME_DATA'
        })
    }
}
export const openGameData = () => {
    return function (dispatch) {
        dispatch({
            type: 'OPEN_GAME_DATA'
        })
    }
}