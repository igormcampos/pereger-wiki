import {FETCH_ABILITIES, FETCH_CONDITIONS, FETCH_EXP_TABLE, FETCH_ITEMS, FETCH_LOOT, FETCH_MONSTERS, FETCH_QUESTS, FETCH_SHOPS} from "../actions/actionTypes";
import equipTypes from '../json/equipTypes'

const initState = {
    equipTypes: equipTypes.data
};

const rootReducer = (state = initState, action = null) => {
    if (action) {
        switch (action.type) {
            case FETCH_ITEMS:
                return {
                    ...state,
                    items: action.items
                };
            case FETCH_ABILITIES:
                return {
                    ...state,
                    abilities: action.abilities
                };
            case FETCH_CONDITIONS:
                return {
                    ...state,
                    conditions: action.conditions
                };
            case FETCH_EXP_TABLE:
                return {
                    ...state,
                    expTable: action.expTable
                };
            case FETCH_LOOT:
                return {
                    ...state,
                    loot: action.loot
                };
            case FETCH_MONSTERS:
                return {
                    ...state,
                    monsters: action.monsters
                };
            case FETCH_QUESTS:
                return {
                    ...state,
                    quests: action.quests
                };
            case FETCH_SHOPS:
                return {
                    ...state,
                    shops: action.shops
                };
            default:
                return state;
        }
    }
    return state;
};

export default rootReducer