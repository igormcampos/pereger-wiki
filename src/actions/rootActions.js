import {FETCH_ABILITIES, FETCH_CONDITIONS, FETCH_EXP_TABLE, FETCH_ITEMS, FETCH_LOOT, FETCH_MONSTERS, FETCH_QUESTS, FETCH_SHOPS} from "./actionTypes";
import itemsTXT from "../json/items.txt";
import abilitiesTXT from "../json/abilities.txt";
import conditionsTXT from "../json/conditions.txt";
import expTableTXT from "../json/exp.txt";
import lootTXT from "../json/loot.txt";
import monstersTXT from "../json/monsters.txt";
import questsTXT from "../json/quests.txt";
import shopsTXT from "../json/shops.txt";
import JSON5 from "json5";

export const fetchItems = () => {
    return (dispatch, getState) => {
        if (!getState().items) {
            fetch(itemsTXT)
                .then((r) => r.text()).then(text => {
                let items = JSON5.parse(text);

                items = items.map(item => {
                    switch (item.category) {
                        case 1:
                            item.geralCategory = 'Weapons';
                            break;
                        case 2:
                            item.geralCategory = 'Armors';
                            break;
                        case 3:
                            item.geralCategory = 'Secondary';
                            break;
                        case 4:
                            item.geralCategory = 'Boots';
                            break;
                        case 5:
                            item.geralCategory = 'Gloves';
                            break;
                        case 6:
                            item.geralCategory = 'Helmet';
                            break;
                        case 7:
                            item.geralCategory = 'Rings';
                            break;
                        case 8:
                            item.geralCategory = 'Necklaces';
                            break;
                        case 9:
                            item.geralCategory = 'Consumables';
                            break;
                        case 10:
                            item.geralCategory = 'Materials';
                            break;
                        case 16:
                            item.geralCategory = 'Money';
                            break;
                        default:
                            item.geralCategory = 'None'
                    }
                    return item
                });

                dispatch({type: FETCH_ITEMS, items: items});
                }
            );
        }
    }
};

export const fetchAbilities = () => {
    return (dispatch, getState) => {
        if (!getState().abilities) {
            fetch(abilitiesTXT)
                .then((r) => r.text()).then(text => {
                    let abilities = JSON5.parse(text);

                    abilities = abilities.map(ability => {
                        if (ability.id <= 8000) {
                            ability.geralCategory = 'Enemy Skills'
                        } else if (ability.id <= 10000) {
                            ability.geralCategory = 'Condition Skills'
                        } else if (ability.id <= 12000) {
                            ability.geralCategory = 'Passive Skills'
                        } else {
                            ability.geralCategory = 'Active Skills'
                        }
                        if (ability.className === 'BetterBows') {
                            ability.value += 'ms'
                        } else if (ability.className !== 'Paramedic') {
                            ability.value = (ability.value * 100) + '%'
                        }
                        return ability
                    });
                    dispatch({type: FETCH_ABILITIES, abilities: abilities});
                }
            );
        }
    }
};

export const fetchConditions = () => {
    return (dispatch, getState) => {
        if (!getState().conditions) {
            fetch(conditionsTXT)
                .then((r) => r.text()).then(text => {
                    dispatch({type: FETCH_CONDITIONS, conditions: JSON5.parse(text)});
                }
            );
        }
    }
};

export const fetchExpTable = () => {
    return (dispatch, getState) => {
        if (!getState().expTable) {
            fetch(expTableTXT)
                .then((r) => r.text()).then(text => {
                    dispatch({type: FETCH_EXP_TABLE, expTable: JSON5.parse(text)});
                }
            );
        }
    }
};

export const fetchLoot = () => {
    return (dispatch, getState) => {
        if (!getState().loot) {
            fetch(lootTXT)
                .then((r) => r.text()).then(text => {
                    dispatch({type: FETCH_LOOT, loot: JSON5.parse(text)});
                }
            );
        }
    }
};

export const fetchMonsters = () => {
    return (dispatch, getState) => {
        if (!getState().monsters) {
            fetch(monstersTXT)
                .then((r) => r.text()).then(text => {
                    dispatch({type: FETCH_MONSTERS, monsters: JSON5.parse(text)});
                }
            );
        }
    }
};

export const fetchQuests = () => {
    return (dispatch, getState) => {
        if (!getState().quests) {
            fetch(questsTXT)
                .then((r) => r.text()).then(text => {
                    dispatch({type: FETCH_QUESTS, quests: JSON5.parse(text)});
                }
            );
        }
    }
};

export const fetchShops = () => {
    return (dispatch, getState) => {
        if (!getState().shops) {
            fetch(shopsTXT)
                .then((r) => r.text()).then(text => {
                    dispatch({type: FETCH_SHOPS, shops: JSON5.parse(text)});
                }
            );
        }
    }
};