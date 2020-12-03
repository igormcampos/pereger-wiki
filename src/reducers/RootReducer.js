import {DO_SEARCH, FETCH_ABILITIES, FETCH_RUNES, FETCH_CONDITIONS, FETCH_EXP_TABLE, FETCH_ITEMS, FETCH_LOOT, FETCH_MONSTERS, FETCH_QUESTS, FETCH_SHOPS,
     TYPE_ON_SEARCH, UPDATE_TABS, FETCH_UPGRADES, FETCH_SPELLS, FETCH_SPRITESHEET} from "../actions/actionTypes";
import equipTypes from '../files/equipTypes'
import monstersImages from "../files/monstersImages";

const initState = {
    items: [],
    runes: [],
    upgrades: [],
    abilities: [],
    spells: [],
    conditions: [],
    expTable: [],
    loot: [],
    monsters: [],
    quests: [],
    shops: [],
    sprites: [],
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
                let sprites = state.spriteSheet.filter(spriteSheet => {
                    return spriteSheet.filename.toLowerCase().includes(action.text.toLowerCase())
                });
                for (let i = 0; i < sprites.length; i++) {
                    result[sprites[i].name] = null
                }

                return {
                    ...state,
                    searchResultList: result
                };
            case DO_SEARCH:
                const searchKeys = Object.keys(state.searchResultList);
                if (searchKeys.length > 1) {
                    const searchedKey = searchKeys[0];
                    let type = 'item';

                    let searchedThing = state.items.find(item => {
                        return item.className.toLowerCase().includes(searchedKey.toLowerCase())
                    });
                    if (searchedThing === undefined) {
                        type = 'ability';
                        searchedThing = state.abilities.find(ability => {
                            return ability.name.toLowerCase().includes(searchedKey.toLowerCase())
                        });
                        if (searchedThing === undefined) {
                            type = 'monster';
                            searchedThing = state.monsters.find(monster => {
                                return monster.name.toLowerCase().includes(searchedKey.toLowerCase())
                            });
                            if (searchedThing === undefined) {
                                type = 'quest';
                                searchedThing = state.quests.find(quest => {
                                    return quest.title.toLowerCase().includes(searchedKey.toLowerCase())
                                });
                            }
                        }
                    }
                    if (type === 'item') {
                        if (searchedThing.generalCategory === 'Materials') {
                            action.history('/items/' + searchedThing.className)
                        } else {
                            action.history('/items/' + searchedThing.name)
                        }
                    } else if (type === 'ability') {
                        action.history('/abilities/' + searchedThing.className)
                    } else if (type === 'monster') {
                        action.history('/monsters/' + searchedThing.className)
                    } else if (type === 'quest') {
                        action.history('/quests/' + searchedThing.name)
                    }
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
            case FETCH_RUNES:
                return {
                    ...state,
                    runes: action.runes
                };
            case FETCH_UPGRADES:
                return {
                    ...state,
                    upgrades: action.upgrades
                };
            case FETCH_ABILITIES:
                return {
                    ...state,
                    abilities: action.abilities
                };
            case FETCH_SPELLS:
                return {
                    ...state,
                    spells: action.spells
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
            case FETCH_SPRITESHEET:
                return {
                    ...state,
                    sprites: action.sprites
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