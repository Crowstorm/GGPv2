import React from 'react';
import _ from 'lodash';
import * as enemies from '../../../store/enemies/enemies';
import * as dialogueCharacters from '../../../store/dialogueCharacters/dialogueCharacters';

import './css/levels.css';
import '../level.css'
import DialogeContainer from '../../../containers/modals/dialogueContainer';

import { BLOCKED_CapitalCrossroads } from '../grids/blockedLevelGrids';

import { characterMovement, characterPosition, checkIfQuestTaken, checkQuestProgress } from '../levelFunctions/levelFunctions';

import damsel from '../../../assets/sprites/npc/damsel_right.png';

class Route1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogue: null
        }

        this.damselInDistress = [
            { text: "Stop right there, scum!", char: dialogueCharacters.shujin },
            { text: "Huh, you're approaching me? Instead of running away you're coming straight at me?", char: dialogueCharacters.banditLeader },
            { text: "I can't beat the shit out of you without getting closer", char: dialogueCharacters.shujin },
            { text: "Hoho, then come as close as you like", char: dialogueCharacters.banditLeader },
            { text: "", effect: this.startBanditCombat },
        ]
        this.damselSaved = [
            { text: "...Such strength! Thank you! As a reward let me invite you to the best inn in the Kingdom", char: dialogueCharacters.damselInDistress},
            { text: "", effect: this.goToInn },
        ]
    }

    updateTroubleAtTheCrossroads = () => {
        this.props.updateQuestProgress('Trouble at the Crossroads', 'enemiesDefeated', true)
    }

    componentDidMount = () => {
        document.addEventListener("keydown", this.handleKeyDown);
        let areEnemiesDefeated = checkQuestProgress('Trouble at the Crossroads', 'enemiesDefeated', this.props)

        if (this.props.modal.dialogue !== this.damselSaved && areEnemiesDefeated) {
            this.props.addDialogue(this.damselSaved);
            this.props.toggleDialogueState();
        }

        //Usunac ja jak skonczy sie quest
        document.getElementById('d2_16').innerHTML = `<img src=${damsel} class="npcSprite" />`
    }

    componentDidUpdate() {
        let { x, y } = this.props.position;
        let { dialogueVisibility } = this.props.modal;
        if (dialogueVisibility) {
            document.removeEventListener("keydown", this.handleKeyDown);
        } else {
            document.addEventListener("keydown", this.handleKeyDown);
        }

        if ((y >= 13 && y <= 18) && x === 4) {
            let areEnemiesDefeated = checkQuestProgress('Trouble at the Crossroads', 'enemiesDefeated', this.props)
            if (this.props.modal.dialogue !== this.damselInDistress && !areEnemiesDefeated) {
                this.props.addDialogue(this.damselInDistress);
                this.props.toggleDialogueState();
            }

            if (this.props.modal.dialogue !== this.damselSaved && areEnemiesDefeated) {
                this.props.addDialogue(this.damselSaved);
                this.props.toggleDialogueState();
            }
        }

    }

    componentWillUnmount = () => {
        document.removeEventListener("keydown", this.handleKeyDown);
    }

    handleKeyDown = _.throttle((e) => {
        let { x, y } = this.props.position;
        characterMovement(this.props, e, BLOCKED_CapitalCrossroads);
    }, this.props.level.movementSpeed)

    tutorial1 = () => {
        const dialogue = [
            { text: "Your character is extremely overpowered, but you never know what future might bring. Follow my instructions for now. Or don't, I'm not your mom.", name: "Narrator" },
            { text: "Let's start with the basics. Nothing more basic than a Basic Attack.", name: "Narrator" },
            { text: "Press the Basic Attack button and then click on portrait of the enemy you want to target", name: "Narrator" }
        ]
        this.props.addDialogue(dialogue);
        this.props.toggleDialogueState();
    }
    tutorial2 = () => {
        const dialogue = [
            { text: "Great job! You killed the poor bastard, but there are more to come and you can only fight four at a time.", name: "Narrator" },
            { text: "Regular slashing of the enemies won't bring you joy in the long run. Time to use some skills.", name: "Narrator" },
            { text: "Press the Skills button, pick a skill you like (I blocked more overpowered skills so you can't ruin this tutorial) and target the enemy.", name: "Narrator" }
        ]
        this.props.addDialogue(dialogue);
        this.props.toggleDialogueState();
    }
    tutorial3 = () => {
        const dialogue = [
            { text: "Another one bites the dust! I like to think you are listening to my instructions so there is a final one from me.", name: "Narrator" },
            { text: "You are one of the few remaining battle mages in the world, that means your skills and magic alike are extremely powerful", name: "Narrator" },
            { text: "Press the Magic button and pick a spell I made available for you. It's AOE, so it will target all visible enemies on the battlefield. Burn them to the ground.", name: "Narrator" },
            { text: "If there are still enemies willing to fight you after that, that means either you didn't follow my instructions or I'm a terrible game designer. Or both.", name: "Narrator" },
        ]
        this.props.addDialogue(dialogue);
        this.props.toggleDialogueState();
    }


    startBanditCombat = () => {
        const foes = [
            enemies.beholder,
            enemies.beholder,
            enemies.beholder,
            enemies.beholder,
            enemies.beholder,
            enemies.beholder,
            enemies.beholder
        ]
        const condition1 = {
            type: 'turn',
            turn: 0
        }
        const condition2 = {
            type: 'turn',
            turn: 1
        }
        const condition3 = {
            type: 'turn',
            turn: 2
        }
        // this.props.addCombatTriggers({ effect: this.tutorial1, condition: condition1 })
        // this.props.addCombatTriggers({ effect: this.tutorial2, condition: condition2 })
        // this.props.addCombatTriggers({ effect: this.tutorial3, condition: condition3 })
        
        this.props.toggleDialogueState()
        this.props.updateCombatRewards(10, 10, null, { effect: this.updateTroubleAtTheCrossroads });
        this.props.addEnemiesToCombat(foes);
        this.props.toggleCombat();
    }

    goToInn = () => {
        this.props.toggleDialogueState()
        this.props.setCharacterPosition(10, 10);
        this.props.changeLevel('WestsideInn');
    }

    render() {
        return (
            <div className="level capitalCrossroads">
                {characterPosition(this.props)}
            </div>
        )
    }
}

export default Route1;