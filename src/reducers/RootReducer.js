import {DO_SEARCH, FETCH_ABILITIES, FETCH_CONDITIONS, FETCH_EXP_TABLE, FETCH_ITEMS, FETCH_LOOT, FETCH_MONSTERS, FETCH_QUESTS, FETCH_SHOPS, TYPE_ON_SEARCH, UPDATE_TABS} from "../actions/actionTypes";
import equipTypes from '../files/equipTypes'
import itemsImages from "../files/itemsImages";
import monstersImages from "../files/monstersImages";

const initState = {
    items: [],
    abilities: [],
    conditions: [],
    expTable: [],
    loot: [],
    monsters: [],
    quests: [],
    shops: [],
    equipTypes: equipTypes.data,
    searchResultList: {}
};

const rootReducer = (state = initState, action = null) => {
    if (action) {
        switch (action.type) {
            case TYPE_ON_SEARCH:
                let result = {};

                let items = state.items.filter(item => {
                    return item.className.toLowerCase().includes(action.text.toLowerCase())
                });
                for (let i = 0; i < items.length; i++) {
                    let imageName = items[i].name.replace(/-/g, '');
                    if (imageName === 'betaring') {
                        imageName = 'silverring'
                    }
                    result[items[i].className] = itemsImages[imageName]
                }
                let abilities = state.abilities.filter(ability => {
                    return ability.name.toLowerCase().includes(action.text.toLowerCase())
                });
                for (let i = 0; i < abilities.length; i++) {
                    result[abilities[i].name] = null
                }
                let monsters = state.monsters.filter(monster => {
                    return monster.name.toLowerCase().includes(action.text.toLowerCase())
                });
                for (let i = 0; i < monsters.length; i++) {
                    result[monsters[i].name] = monstersImages[monsters[i].monsterId]
                }
                let quests = state.quests.filter(quest => {
                    return quest.title.toLowerCase().includes(action.text.toLowerCase())
                });
                for (let i = 0; i < quests.length; i++) {
                    result[quests[i].name] = null
                }

                return {
                    ...state,
                    searchResultList: result
                };
            case DO_SEARCH:
                const searchKeys = Object.keys(state.searchResultList);
                if (searchKeys.length === 1) {
                    const searchedKey = searchKeys[0];
                    let type = 'item';

                    let result = state.items.find(item => {
                        return item.className.toLowerCase().includes(searchedKey.toLowerCase())
                    });
                    if (result === undefined) {
                        type = 'ability';
                        result = state.abilities.find(ability => {
                            return ability.name.toLowerCase().includes(searchedKey.toLowerCase())
                        });
                        if (result === undefined) {
                            type = 'monster';
                            result = state.monsters.find(monster => {
                                return monster.name.toLowerCase().includes(searchedKey.toLowerCase())
                            });
                            if (result === undefined) {
                                type = 'quest';
                                result = state.quests.find(quest => {
                                    return quest.title.toLowerCase().includes(searchedKey.toLowerCase())
                                });
                            }
                        }
                    }
                    if (type === 'item') {
                        if (result.generalCategory === 'Materials') {
                            action.history('/items/' + result.className)
                        } else {
                            action.history('/items/' + result.name)
                        }
                    } else if (type === 'ability') {
                        action.history('/abilities/' + result.className)
                    } else if (type === 'monster') {
                        action.history('/monsters/' + result.className)
                    } else if (type === 'quest') {
                        action.history('/quests/' + result.name)
                    }
                } else {
                    //    TODO search result list
                }
                return {
                    ...state,
                    searchResultList: {}
                };
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
            case UPDATE_TABS:
                return {
                    ...state,
                    tabs: action.tabs
                };
            default:
                return state;
        }
    }
    return state;
};

export default rootReducer