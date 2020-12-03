import { DO_SEARCH, FETCH_ABILITIES, FETCH_CONDITIONS, FETCH_EXP_TABLE, FETCH_ITEMS, FETCH_LOOT, FETCH_MONSTERS, FETCH_QUESTS, FETCH_RUNES, FETCH_SHOPS, 
    TYPE_ON_SEARCH, UPDATE_TABS, FETCH_UPGRADES, FETCH_SPELLS, FETCH_SPRITESHEET } from "./actionTypes";
import JSON5 from "json5";
import equipTypes from "../files/equipTypes";

const itemsURL = 'https://peregeronline.com/game-files/items.txt';
const abilitiesURL = 'https://peregeronline.com/game-files/abilities.txt';
const spellsURL = 'https://peregeronline.com/game-files/spells.txt';
const monstersURL = 'https://peregeronline.com/game-files/monsters.txt';
const questsURL = 'https://peregeronline.com/game-files/quests.txt';
const conditionsURL = 'https://peregeronline.com/game-files/conditions.txt';
const expURL = 'https://peregeronline.com/game-files/exp.txt';
const shopsURL = 'https://peregeronline.com/game-files/shops.txt';
const lootURL = 'https://peregeronline.com/game-files/loot.txt';
const upgradesURL = 'https://peregeronline.com/game-files/upgrades.txt';
const spriteSheetURL = 'https://peregeronline.com/game-files/graphics-atlas.json';


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
            fetch(itemsURL).then((response) => response.text()).then(text => {
                let items = JSON5.parse(text);

                items = items.filter(item => {
                    // Not empty equips / miscellaneous things like xp and patron / runes
                    return !item.className.includes('Empty') && item.itemId > 2000 && item.category !== 11
                }).map(item => {
                    // Format the equips attributes
                    item.bonus = item.bonus && Object.entries(item.bonus).map((b, index) => {
                        let itemBonusType = b[0];
                        let itemBonusValue = b[1];
                        if (itemBonusType === 'atkRate') {
                            itemBonusValue = itemBonusValue + 'ms'
                        } else if (['critX', 'critY', 'block'].includes(itemBonusType)) {
                            if (itemBonusType === 'critX') {
                                itemBonusType = 'Crit Chance'
                            } else if (itemBonusType === 'critY') {
                                itemBonusType = 'Crit Mult'
                            } else {
                                itemBonusType = 'Block'
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
                            item.generalCategory = 'Helmet';
                            break;
                        case 6:
                            item.generalCategory = 'Accessory';
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

                dispatch({ type: FETCH_ITEMS, items: items });
            });
        }
    }
};

export const fetchRunes = () => {
    return (dispatch, getState) => {
        if (getState().runes.length === 0) {
            fetch(itemsURL).then((response) => response.text()).then(text => {
                const items = JSON5.parse(text);
                const runes = items.filter(item => {
                    // Not empty equips / miscellaneous things like xp and patron
                    return item.className.includes('Blank') || item.category === 11
                }).map(rune => {
                    // Format the equips required to use the rune
                    rune.equip = rune.equip && rune.equip.map((equip, index) => {
                        let type = '';
                        if (index > 0) {
                            type = ', '
                        }
                        type += equipTypes.data.find(equipType => {
                            return equipType.id === equip
                        }).type;
                        return type
                    });
                    return rune
                });

                dispatch({ type: FETCH_RUNES, runes: runes });
            });
        }
    }
};

export const fetchUpgrades = () => {
    return (dispatch, getState) => {
        if (getState().upgrades.length === 0) {
            fetch(upgradesURL).then((response) => response.text()).then(text => {
                const upgrades = JSON5.parse(text);
                dispatch({ type: FETCH_UPGRADES, upgrades: upgrades });
            });
        }
    }
};

export const fetchAbilities = () => {
    return (dispatch, getState) => {
        if (getState().abilities.length === 0) {
            fetch(abilitiesURL).then((response) => response.text()).then(text => {
                let abilities = JSON5.parse(text);

                abilities = abilities.map(ability => {
                    // Split abilities into categories, that will show in different sections on the page
                    if (ability.id <= 8000) {
                        ability.generalCategory = 'Enemy Skills'
                    } else if (ability.id <= 9000) {
                        ability.generalCategory = 'Condition Skills'
                    } else if (ability.id <= 10000) {
                        ability.generalCategory = 'Enemy Condition Skills'
                    } else if (ability.id <= 12000) {
                        ability.generalCategory = 'Passive Skills'
                    }

                    // Format abilities values
                    if (ability.className === 'BetterBows') {
                        ability.value += 'ms'
                    } else if (ability.className === 'KeenEye') {
                        ability.value = ''
                    } else if (ability.className !== 'Paramedic') {
                        if (ability.category === 'Enemy') {
                            ability.value = (Math.floor(ability.value * 10000) / 100) + '%'
                        } else {
                            ability.value = 'Current x ' + (Math.floor(ability.value * 10000) / 100) + '%'
                        }
                    }

                    ability.spell = false;

                    return ability
                });
                dispatch({ type: FETCH_ABILITIES, abilities: abilities });
            });
        }
    }
};

export const fetchSpells = () => {
    return (dispatch, getState) => {
        if (getState().spells.length === 0) {
            fetch(spellsURL).then((response) => response.text()).then(text => {
                let spells = JSON5.parse(text);

                spells = spells.map(spell => {
                    // Format the equips required to use the ability
                    spell.equip = spell.equip && spell.equip.map((equip, index) => {
                        let type = '';
                        if (index > 0) {
                            type = ', '
                        }
                        type += equipTypes.data.find(equipType => {
                            return equipType.id === equip
                        }).type;
                        return type
                    });

                    spell.spell = true;

                    return spell
                });
                dispatch({ type: FETCH_SPELLS, spells: spells });
            });
        }
    }
};

export const fetchConditions = () => {
    return (dispatch, getState) => {
        if (getState().conditions.length === 0) {
            fetch(conditionsURL).then((response) => response.text()).then(text => {
                dispatch({ type: FETCH_CONDITIONS, conditions: JSON5.parse(text) });
            });
        }
    }
};

export const fetchExpTable = () => {
    return (dispatch, getState) => {
        if (getState().expTable.length === 0) {
            fetch(expURL).then((response) => response.text()).then(text => {
                const xpTable = JSON5.parse(text);
                let spellsXP = [];
                for (let i = 0; i < 12; i++) {
                    let level = [];
                    for (let j = 0; j < 10; j++) {
                        let startLevel = 25 + 25 * (i + 1);
                        let scaledLevel = Math.ceil(startLevel / 10 * j);
                        let xpRequiredNext = xpTable.find(lv => lv.level === scaledLevel);
                        if (typeof xpRequiredNext !== 'undefined') {
                            level.push(xpRequiredNext.exp);
                        }
                    }
                    spellsXP.push(level);
                }
                dispatch({ type: FETCH_EXP_TABLE, expTable: xpTable });
            });
        }
    }
};

export const fetchLoot = () => {
    return (dispatch, getState) => {
        if (getState().loot.length === 0) {
            fetch(lootURL).then((response) => response.text()).then(text => {
                dispatch({ type: FETCH_LOOT, loot: JSON5.parse(text) });
            });
        }
    }
};

export const fetchMonsters = () => {
    return (dispatch, getState) => {
        if (getState().monsters.length === 0) {
            fetch(monstersURL).then((response) => response.text()).then(text => {
                let monsters = JSON5.parse(text);
                monsters = monsters.filter(monster => {
                    // Remove the 3 wolves that Alpha Wolf summons from the list
                    return ![20, 21, 22].includes(monster.monsterId)
                }).map(monster => {
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

                dispatch({ type: FETCH_MONSTERS, monsters: monsters });
            });
        }
    }
};

export const fetchQuests = () => {
    return (dispatch, getState) => {
        if (getState().quests.length === 0) {
            fetch(questsURL).then((response) => response.text()).then(text => {
                let quests = JSON5.parse(text);
                fetch(itemsURL).then((response) => response.text()).then(text => {
                    let items = JSON5.parse(text);
                    fetch(monstersURL).then((response) => response.text()).then(text => {
                        let monsters = JSON5.parse(text);

                        quests = quests.filter(quest => {
                            // hide hidden quests
                            return quest.id < 20000
                        }).map(quest => {
                            switch (quest.objective) {
                                // objective 0; quest = 1; talk = 2; kill = 3; action = 4
                                case 2: case 3:
                                    // map monsters or NPCs to quest based on the id
                                    quest.target = monsters.find(monster => {
                                        return monster.monsterId === quest.target
                                    });
                                    break;
                                default:
                                    // map items to quest based on the id
                                    quest.target = items.find(item => {
                                        return item.itemId === quest.target
                                    });
                                    break;
                            }

                            // rewards will always be items
                            quest.reward = items.find(item => {
                                return item.itemId === quest.reward
                            });

                            return quest
                        });

                        dispatch({ type: FETCH_QUESTS, quests: quests });
                    });
                });
            });
        }
    }
};

export const fetchShops = () => {
    return (dispatch, getState) => {
        if (getState().shops.length === 0) {
            fetch(shopsURL).then((response) => response.text()).then(text => {
                dispatch({ type: FETCH_SHOPS, shops: JSON5.parse(text) });
            });
        }
    }
};

export const fetchSpriteSheet = () => {
    return (dispatch, getState) => {
        if (getState().sprites.length === 0) {
            fetch(spriteSheetURL).then((response) => response.text()).then(text => {
                dispatch({ type: FETCH_SPRITESHEET, sprites: JSON5.parse(text) });
            });
        }
    }
};

export const updateTabs = (tabs) => {
    return {
        type: UPDATE_TABS,
        tabs: tabs
    }
};