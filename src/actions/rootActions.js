import {DO_SEARCH, FETCH_ABILITIES, FETCH_CONDITIONS, FETCH_EXP_TABLE, FETCH_ITEMS, FETCH_LOOT, FETCH_MONSTERS, FETCH_QUESTS, FETCH_SHOPS, TYPE_ON_SEARCH, UPDATE_TABS} from "./actionTypes";
import abilitiesTXT from "../files/abilities.txt";
import conditionsTXT from "../files/conditions.txt";
import expTableTXT from "../files/exp.txt";
import lootTXT from "../files/loot.txt";
import monstersTXT from "../files/monsters.txt";
import questsTXT from "../files/quests.txt";
import shopsTXT from "../files/shops.txt";
import JSON5 from "json5";
import equipTypes from "../files/equipTypes";

export const typeOnSearch = (text) => {
    return {
        type: TYPE_ON_SEARCH,
        text: text
    }
};


export const doSearch = (history) => {
    return {
        type: DO_SEARCH,
        history: history
    }
};

export const fetchItems = () => {
    return (dispatch, getState) => {
        if (getState().items.length === 0) {
            fetch('https://gist.githubusercontent.com/igormcampos/2e6a454d4e3f5cb95e60c7b0015acc6a/raw/c74c72e70dead23536ebf9c1b092a41245330546/items.txt')
                .then((response) => response.text()).then(text => {
                let items = JSON5.parse(text);

                items = items.filter(item => {
                    // Not empty equips / miscellaneous things like xp and patron / not runes
                    return item.className !== 'Empty' && item.itemId > 2000 && item.category !== 11
                }).map(item => {
                    // Format the equips attributes
                    item.bonus = item.bonus && Object.entries(item.bonus).map((b, index) => {
                        let itemBonusType = b[0];
                        let itemBonusValue = b[1];
                        if (itemBonusType === 'atkRate') {
                            itemBonusValue = itemBonusValue + 'ms'
                        } else if (itemBonusType === 'critX' || itemBonusType === 'critY' || itemBonusType === 'block') {
                            if (itemBonusType === 'critX') {
                                itemBonusType = 'Crit Chance'
                            } else if ('block') {
                                itemBonusType = 'Block'
                            } else {
                                itemBonusType = 'Crit Mult'
                            }
                            itemBonusValue = Math.floor(itemBonusValue * 100) + '%'
                        }
                        itemBonusType = itemBonusType + ': ';
                        if (index !== 0) {
                            itemBonusType = ', ' + itemBonusType
                        }
                        return [itemBonusType, itemBonusValue]
                    });

                    // Format the equips requirements
                    item.req = item.req && Object.entries(item.req).map((requirement, index) => {
                        let requirementType = requirement[0] + ': ';
                        let requirementValue = requirement[1];
                        if (index !== 0) {
                            requirementType = ', ' + requirementType
                        }
                        return [requirementType, requirementValue]
                    });

                    // Translate the materials letter into readable content
                    item.matReq = item.matReq && item.matReq.split(';').map((material, index) => {
                        let materialType = material[0].split(':');
                        let materialValue = material[1].split(':');
                        switch (materialType) {
                            case 'w':
                                materialType = 'Wood';
                                break;
                            case 'b':
                                materialType = 'Beast';
                                break;
                            case 'm':
                                materialType = 'Metal';
                                break;
                            case 'l':
                                materialType = 'Legendary';
                                break;
                            case 'c':
                                materialType = 'Cloth';
                                break;
                            case 'p':
                                materialType = 'Powder';
                                break;
                            default:
                                materialType = 'Aurum';
                        }
                        if (index !== 0) {
                            materialType = ', ' + materialType
                        }
                        materialType = materialType + ': ';
                        return [materialType, materialValue]
                    });

                    // Split items into categories, that will show in different sections on the page
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
                        case 11:
                            item.generalCategory = 'Runes';
                            break;
                        case 12:
                            item.generalCategory = 'Quest';
                            break;
                        case 13:
                            item.generalCategory = 'Collection';
                            break;
                        case 16:
                            item.generalCategory = 'Money';
                            break;
                        default:
                            item.generalCategory = 'Other'
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
        if (getState().abilities.length === 0) {
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
                        } else if (ability.className === 'KeenEye') {
                            ability.value = ''
                        } else if (ability.className !== 'Paramedic') {
                            ability.value = 'Current x ' + (Math.floor(ability.value * 10000) / 100) + '%'
                        }

                        ability.equip = ability.equip && ability.equip.map((e, index) => {
                            let type = '';
                            if (index > 0) {
                                type = ', '
                            }
                            type += equipTypes.data.find(type => {
                                return type.id === e
                            }).type;
                            return type
                        });

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
        if (getState().conditions.length === 0) {
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
        if (getState().expTable.length === 0) {
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
        if (getState().loot.length === 0) {
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
        if (getState().monsters.length === 0) {
            fetch(monstersTXT)
                .then((r) => r.text()).then(text => {
                let monsters = JSON5.parse(text);
                monsters = monsters.map(monster => {
                    if (monster.monsterId <= 2000) {
                        monster.generalCategory = 'Normal Monsters'
                    } else if (monster.monsterId <= 4000) {
                        monster.generalCategory = "Friendly NPC's"
                    } else if (monster.monsterId <= 6000) {
                        monster.generalCategory = 'Bosses'
                    } else {
                        monster.generalCategory = 'Friendly Monsters'
                    }
                    if (monster.str > 1) {
                        monster.atkStat = monster.str
                    } else if (monster.mag > 1) {
                        monster.atkStat = monster.mag
                    } else if (monster.dex > 1) {
                        monster.atkStat = monster.dex
                    } else {
                        monster.atkStat = 1
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
        if (getState().quests.length === 0) {
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
        if (getState().shops.length === 0) {
            fetch(shopsTXT)
                .then((r) => r.text()).then(text => {
                    dispatch({type: FETCH_SHOPS, shops: JSON5.parse(text)});
                }
            );
        }
    }
};

export const updateTabs = (tabs) => {
    return {
        type: UPDATE_TABS,
        tabs: tabs
    }
};