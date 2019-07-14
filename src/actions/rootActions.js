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
                    item.bonus = item.bonus && Object.entries(item.bonus).map((b, index) => {
                        if (b[0] === 'atkRate') {
                            b[1] = b[1] + 'ms'
                        } else if (b[0] === 'critX' || b[0] === 'critY') {
                            if (b[0] === 'critX') {
                                b[0] = 'Crit Chance'
                            } else {
                                b[0] = 'Crit Mult'
                            }
                            b[1] = b[1] * 100 + '%'
                        }
                        b[0] = b[0] + ': ';
                        if (index !== 0) {
                            b[0] = ', ' + b[0]
                        }
                        return b
                    });
                    item.req = item.req && Object.entries(item.req).map((r, index) => {
                        r[0] = r[0] + ': ';
                        if (index !== 0) {
                            r[0] = ', ' + r[0]
                        }
                        return r
                    });
                    item.matReq = item.matReq && item.matReq.split(';').map((m, index) => {
                        let mat = m.split(':');
                        switch (mat[0]) {
                            case 'w':
                                mat[0] = 'Wood';
                                break;
                            case 'b':
                                mat[0] = 'Beast';
                                break;
                            case 'm':
                                mat[0] = 'Metal';
                                break;
                            case 'l':
                                mat[0] = 'Legendary';
                                break;
                            case 'c':
                                mat[0] = 'Cloth';
                                break;
                            case 'p':
                                mat[0] = 'Powder';
                                break;
                            default:
                                mat[0] = 'Aurum';
                        }
                        if (index !== 0) {
                            mat[0] = ', ' + mat[0]
                        }
                        mat[0] = mat[0] + ': ';
                        return mat
                    });
                    switch (item.category) {
                        case 1:
                            item.generalCategory = 'Weapons';
                            break;
                        case 2:
                            item.generalCategory = 'Armors';
                            break;
                        case 3:
                            item.generalCategory = 'Secondary';
                            break;
                        case 4:
                            item.generalCategory = 'Boots';
                            break;
                        case 5:
                            item.generalCategory = 'Gloves';
                            break;
                        case 6:
                            item.generalCategory = 'Helmet';
                            break;
                        case 7:
                            item.generalCategory = 'Rings';
                            break;
                        case 8:
                            item.generalCategory = 'Necklaces';
                            break;
                        case 9:
                            item.generalCategory = 'Consumables';
                            break;
                        case 10:
                            item.generalCategory = 'Materials';
                            break;
                        case 16:
                            item.generalCategory = 'Money';
                            break;
                        default:
                            item.generalCategory = 'None'
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
                            ability.generalCategory = 'Enemy Skills'
                        } else if (ability.id <= 10000) {
                            ability.generalCategory = 'Condition Skills'
                        } else if (ability.id <= 12000) {
                            ability.generalCategory = 'Passive Skills'
                        } else {
                            ability.generalCategory = 'Active Skills'
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
                let monsters = JSON5.parse(text);
                monsters = monsters.map(monster => {
                    if (monster.id <= 2000) {
                        monster.generalCategory = 'Normal Monsters'
                    } else if (monster.id <= 4000) {
                        monster.generalCategory = "Friendly NPC's"
                    } else if (monster.id <= 6000) {
                        monster.generalCategory = 'Bosses'
                    }
                    return monster
                });

                dispatch({type: FETCH_MONSTERS, monsters: monsters});
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