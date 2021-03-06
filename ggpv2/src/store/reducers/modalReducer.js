import produce from "immer";


const initial_state = {
    //dialogue
    dialogueVisibility: false,
    dialogue: [],
    characterCardVisibility: false,
    combatRewardsCardVisibility: false,
    shopVisibility: false,
    gameDataVisibility: false,
    shopContent: {
        armor: [],
        weapon: [],
        consumables: []
    }
}

export default (state = initial_state, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'LOAD_GAME':
                return action.modalState;
            case 'TOGGLE_DIALOGUE': {
                draft.dialogueVisibility = !draft.dialogueVisibility
                break;
            }
            case 'ADD_DIALOGUE':
                draft.dialogue = action.dialogue;
                break;
            case 'TOGGLE_CHARACTER_CARD': {
                draft.characterCardVisibility = !draft.characterCardVisibility
                break;
            }
            case 'TOGGLE_GAME_DATA': {
                draft.gameDataVisibility = !draft.gameDataVisibility
                break;
            }
            case 'OPEN_GAME_DATA': {
                draft.gameDataVisibility = true;
                break;
            }
            case 'TOGGLE_COMBAT_REWARDS_CARD': {
                draft.combatRewardsCardVisibility = !draft.combatRewardsCardVisibility;
                break;
            }
            case 'TOGGLE_SHOP':
                draft.shopVisibility = !draft.shopVisibility
                break;
            default: {
                return draft;
            }
        }
    });
}