import React from 'react';

import _ from 'lodash';
import { MAIN_GRID } from '../grids/grids';

export const characterMovement = (props, e, BLOCKED) => {
    //Quit dialogue on movement
    if (props.modal.dialogueVisibility) {
        props.toggleDialogueState();
    }

    if(props.event.preCombatAnimation){
        return;
    }

    switch (e.key) {
        case "ArrowUp": {
            let err = [];

            _.forEach(BLOCKED, cell => {
                if (props.position.y + 1 === cell.y && props.position.x === cell.x) {
                    err.push('blocked');
                }
            })
            if (err.length === 0) {
                props.moveCharUp();
            }
            break;
        }
        case "ArrowDown": {
            let err = [];

            _.forEach(BLOCKED, cell => {
                if (props.position.y - 1 === cell.y && props.position.x === cell.x) {
                    err.push('blocked');
                }
            })
            if (err.length === 0) {
                props.moveCharDown();
            }
            break;
        }
        case "ArrowLeft": {
            let err = [];

            _.forEach(BLOCKED, cell => {
                if (props.position.y === cell.y && props.position.x - 1 === cell.x) {
                    err.push('blocked');
                }
            })
            if (err.length === 0) {
                props.moveCharLeft();
            }
            break;
        }
        case "ArrowRight": {
            let err = [];

            _.forEach(BLOCKED, cell => {
                if (props.position.y === cell.y && props.position.x + 1 === cell.x) {
                    err.push('blocked');
                }
            })
            if (err.length === 0) {
                props.moveCharRight();
            }
            break;
        }
        default: { return }
    }
}

export const characterPosition = (props) => {
    const renderPosition = (cell) => {
        if (props.position.x === cell.x && props.position.y === cell.y) {
            return <img id="mainCharacter" alt="character" src={props.position.model} style={{ height: 48, transform: 'translateY(-16px)' }} />;
        }
    }

    const renderMainGrid = () => {
        return _.map(MAIN_GRID, row => {
            return <div key={`row${row[0].y}`} className="row" style={{ margin: 0 }}> {_.map(row, cell => {
                return <div key={cell.x + '.' + cell.y} id={'d' + cell.x + '_' + cell.y} className="gridCell"> {renderPosition(cell)}  </div>
            })
            } </div>
        })
    };

    return renderMainGrid();
}

export const checkIfQuestTaken = (name, props) => {
    let questLog = props.event.questLog;
    let i = _.findIndex(questLog, { name: name });
    if (i > -1) {
        return true;
    }
    return false;
}

export const checkQuestProgress = (questName, questProgress, props) => {
    let questLog = props.event.questLog;
    let hasQuestProgressed = false;
 
    let i = _.findIndex(questLog, { name: questName });
    if (i > -1) {
        if (questLog[i] && questLog[i][questProgress]) {
            return true;
        }
    }
    return false
}

export const rollForRandomCombat = () => {
    const roll = Math.floor((Math.random() * 100) + 1);
    if (roll > 0 && roll < 4) {
        return true;
    }
    return false;
}

export const isChestCleared = (name, props) => {
    const chests = props.event.chestsCleared;
    const i = chests.indexOf(name);
    if (i > -1) return true;
    return false;
}