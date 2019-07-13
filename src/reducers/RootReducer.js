import abilities from './../json/abilities'
import quests from './../json/quests.txt'

const initState = {
    abilities: abilities.data.map(ability => {
        if (ability.id <= 8000) {
            ability.geralCategory = 'Enemy Skills'
        } else if (ability.id <= 10000) {
            ability.geralCategory = 'Condition Skills'
        } else if (ability.id <= 12000) {
            ability.geralCategory = 'Passive Skills'
        } else {
            ability.geralCategory = 'Active Skills'
        }
        return ability
    }),
    quests: JSON.stringify(quests)
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_ABILITY') {
        return {
            ...state,
            abilities: state.abilities.filter(ability => {
                return action.id !== ability.id
            })
        }
    }
    return state;
};

export default rootReducer