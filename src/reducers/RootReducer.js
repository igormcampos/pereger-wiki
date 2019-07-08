import abilities from './../json/abilities'

const initState = {
    abilities: abilities.data
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