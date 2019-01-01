import produce from "immer";

let initial_state = {
    // isCombat: true,
    currentLevel: 'ThroneRoom',
    movementSpeed: 100
}

export default (state = initial_state, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'CHANGE_LEVEL': {
                draft.currentLevel = action.levelName;
                break;
            }
            default: {
                return draft;
            }
        }
    });
}