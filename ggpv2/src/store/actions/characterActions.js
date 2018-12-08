import {changeTurn} from './combatActions';



export const allyLoseHp = (dmg, i) => (dispatch, getState) =>{
    const currentHp = getState().characters[i].stats.hp;
    console.log({currentHp})
    if(dmg > currentHp){
        dmg = currentHp
    }
    dispatch({
        type: 'ALLY_LOSE_HP',
        dmg, 
        i
    })
}